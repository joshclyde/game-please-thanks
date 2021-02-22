# Music MVP

Capitalize Tree and Jam

Think about what to name Parent and Children? (unless Parent and Children are fine)

## Core Stuff

Music Storage is a Directed Acyclic Graph. That way nodes can have multiple parents. This way when I look at a node I can know all the other nodes it's in (e.g. if a song is in my favorites, favorite rap songs, best of 2020, the artist, the album, etc.)

## Explore

**When exploring, important to focus the experience around adding new artists, albums and songs to the tree (and maybe jam sessions)**

Explore is searching through the spotify catalogue to add music to your tree.

## Tree

https://en.wikipedia.org/wiki/Directed_acyclic_graph

Everything except a song is a label (this includes albums and artists).

Some labels can have special links to the source. I think it's important to still have that connection rather than a raw copy/paste.
- Artist
- Album
- Song

You can create your own labels! Each label can have their own children, such as songs or other labels.

No circular dependencies.
- node = label (artist, album, custom)
- leaf node = song

(should i call it label or node?)

## Jam Session

Whenever you play something, it is always a Jam Session. You can save a jam session to a library of jam sessions.

You can add songs, labels, and rules to your jam session.

- Song: Specific songs you want to add. Pretty straightforward.
- Label: All songs that are descendants of the label will be added.
  - Example: If I add the label BTS then any song that is a descendant of BTS will be added. (should I allow a specific depth?)
- Rule: Boolean logic to add songs based off of rules. The basic boolean operators (&&, ||, NOT, etc.) can be applied to the following fields
  - Label Descendant: Descendant of a label (basically same as Label)
    - Example: `descendantOf: Kanye West && descendantOf: Ellie Likes`. This will add all songs under the Kanye West label that also have the label of Ellie Likes.
  - Have a way to exclude a specific song that a rule catches? Just in case I have a rule to get 99% of the music I want but really don't want one specific song that the rule is catching.
  - date? before x date, after x date, between x and y date, on this year

## Player

Need a way to show what is currently playing!!

Keyboard shortcuts for the actions (e.g. space bar for pause/play)

## Dark and Light Theme

Some people prefer dark, others prefer light. Also would be fun.
