# Copyright 2014 MongoDB, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
Generates per-build "buildinfo" artifacts that access to build-time data,
including the release.txt file that has the hash that reflects the version of
the source reflected in a build, as well as content useable in the includes
directory so that you can reference the commit in the documentation text.
"""

import logging
import os

logger = logging.getLogger('giza.hash')

from rstcloth.rstcloth import RstCloth

#################### Rendering ####################


def generate_hash_file(fn, conf):
    r = RstCloth()

    if os.path.exists(fn):
        with open(fn, 'r') as f:
            existing = f.read()
    else:
        existing = []

    commit = conf.git.commit
    r.directive('|commit| replace', '``{0}``'.format(commit))

    try:
        if r.data == existing[:-1]:
            logger.info('no new commit(s), not updating {0} ({1})'.format(fn, commit[:10]))
            return True
    except TypeError:
        logger.warning('problem generating {0}, continuing'.format(fn))
        if os.path.exists(fn):
            os.utime(fn, None)
        else:
            with open(fn, 'a'):
                os.utime(fn, None)
    else:
        r.write(fn)
        logger.info('regenerated {0} with new commit hash: {1}'.format(fn, commit[:10]))


def generate_release_file(release_fn, conf):
    release_root = os.path.dirname(release_fn)
    if not os.path.exists(release_root):
        os.makedirs(release_root)

    with open(release_fn, 'w') as f:
        f.write(conf.git.commit)

    logger.info('generated "{0}" with current release hash.'.format(release_fn))

#################### Worker ####################


def hash_tasks(conf, app):
    hash_fn = os.path.join(conf.paths.projectroot,
                           conf.paths.branch_includes,
                           'hash.rst')

    hash_task = app.add('task')
    hash_task.job = generate_hash_file
    hash_task.args = [hash_fn, conf]
    hash_task.target = hash_fn
    hash_task.description = 'creating hash file: {0}'.format(hash_fn)

    release_fn = os.path.join(conf.paths.projectroot,
                              conf.paths.public_site_output,
                              'release.txt')

    release_task = app.add('task')
    release_task.job = generate_release_file
    release_task.args = [release_fn, conf]
    release_task.target = release_fn
    release_task.description = "creating release filename: {0}".format(release_fn)
