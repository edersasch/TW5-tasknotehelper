# TW5-tasknotehelper

This plugin for
[TiddlyWiki](https://tiddlywiki.com)
adds tools to manage projects, tasks and notes.

Add tasks to your wiki: Use the macro
`<<listprojects>>`
and you get an edit
field to add a project. The new project will be shown with an additional edit
field to add a next (`N`: nothing prevents you from working on it) task. A task
can also be in a waiting (`W`: someone else has to do something before you can)
or future (`F`: an idea that should not be forgotten) state.

Add notes to your wiki: Use the macro
`<<inputnewentry tags:"Note" placeholder:"New Category">>`
and you get an edit field to add a tiddler with the tag "Note" Now also add the
macro
`<<listsubcategories Note "New Note">>`
and you will see all tiddlers that are tagged with "Note" and an additional
edit field to create tiddlers that are tagged with the name of the tiddler they
are created under.

Please try the [demo](https://stumpy-dirge-86.tiddlyhost.com/)
and check the
[changelog](plugins/tasknotehelper/changelog.tid)
(tiddler format).
