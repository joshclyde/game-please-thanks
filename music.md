# Music

## What's my issue with spotify

- I don't like the directory structure of playlists.
- I want to put pictures on directories and playlists.
- I want to add my own pictures for artists.
- On desktop spotify the album pictures are way to large when searching.
- I want a better way to navigate my music.
- I want to know what playlists a specific song is connected to. 
- Navigating my albums is pretty lame. Basically just a list of all my albums, and then I get a search bar.
- I have a bunch of albums saved, but the artists for those albums aren't saved when I save an album.
- I don't like the artist pages. It's very long. The album sizes are so large that you don't really see much on the same screen.
- Spotify has too much stuff that I don't care about on my home page. Like, it's cool and all but I don't want all of it on my home page. I feel like there should be a suggestions page that I can go to view all their fancy stuff when I want to.
- Spotify emails me when artists it thinks I like come out with new music, but other than that there's not much.
- I don't care about podcasts
- I could care about radio, but currently don't
- On desktop the only navigation for playlists is on the sidebar
- When I go on a trip, I'll make a spotify playlist. I want to be able to play all the songs without hearing any duplicates and in a random order. However the only way to kinda do this is to sort by song title and remember when you last played. If I shuffle play it, decided to play something else or spotify quits and doesn't remember what I was playing then there's no way to continue playing the playlist without listening to duplicates.
- What does a Liked Song even mean??? How is it different than me just making a playlist called "Like Songs"?
- ***I feel like Spotify is built more for people who want to constantly be listening to new music and want Spotify to recommend a whole bunch of stuff for them, but I like listening to my own library of music***

## Potential Names

- Jamtree
- Jams Tree
- Treejams
- Tree of Jams
- ...

## Commands

Give the user the ability to create commands to play music. For example,

- Play a random album
- Play a random album from BTS
- Play the album from BTS that I listend to the longest ago.
- Play all songs from BTS, shuffled

This kinda goes against the whole "only allowed to play jam session".

## Adding Labels

Everything except a song is a label (this includes albums and artists).

Hard Set Labels? Should these be special?
- Artist
- Album
- Song

Should an album be a somewhat forced label? Or just an easy shortcut to make a label of the album with the songs in it, but then the use can do whatever they want with it.

You can create your own labels! Each label can have their own children, such as songs or other labels.

No circular dependencies (directed acyclic graph?)
- node = label (artist, album, whatever)
- leaf node = song

## Jam Session

A jam session allows you to create a list of songs with a smart, persisted listening history so that you can pick up right where you left off even when switching between jam sessions. Remembering songs you have played and songs you have not played allows the jam session to continue listening without replaying songs you've already heard in the session.

***Should you only be allowed to play jam sessions?***

You can add songs, labels, and rules to your jam session.

- Song: Specific songs you want to add. Pretty straightforward.
- Label: All songs that are descendants of the label will be added.
  - Example: If I add the label BTS then any song that is a descendant of BTS will be added.
- Rule: Boolean logic to add songs based off of rules. The basic boolean operators (&&, ||, NOT, etc.) can be applied to the following fields
  - Label Descendant: Descendant of a label (basically same as Label)
    - Example: `descendantOf: Kanye West && descendantOf: Ellie Likes`. This will add all songs under the Kanye West label that also have the label of Ellie Likes.
  - Have a way to exclude a specific song that a rule catches? Just in case I have a rule to get 99% of the music I want but really don't want one specific song that the rule is catching.
  - date? before x date, after x date, between x and y date, on this year

## Current Action

A current action allows you to define what your currently trying to do and easily apply it to entities. Some examples are
  - **Add to Jam Session X**: I'm currently creating a new jam session named "X". I'd like to look through my library of songs and have a shortcut button to add a song or label to the jam session. TODO: should this just be a completely different view?
  - **Exclude from Jam Session**
  - **Make song/label descendant of label X**: I created a new label "K-pop" and would like to go through my existing artist labels and set all the k-pop artists to be a descendant of the K-pop label.
  - **Fully Remove from Tree**: My tree of songs has gotten out of hand and I want to remove stuff.

## Search

Different search experiences for the tree and the library.

## Cool Ideas?

- A random album player could be cool. Maybe some button that could play an album that I listened to frequently a while ago but haven't listened to for a while.
- Give the user the ability to create commands to play music. For example,
  - Play a random album
  - Play a random album from BTS
  - Play the album from BTS that I listend to the longest ago.
  - Play all songs from BTS, shuffled
- Desktop Player Mode (just fullscreen player)
- Give Images to labels. Allow for rotating images?
- Can search my tree and the library
- Spotify does a good job keeping a history of the pages you've visited and going backwards.
- Hard Connection to spotify artists/albums/songs. Basically if I create a "BTS" label I want it to kinda stay in sync with spotify's BTS artist data, and same with albums (and I guess songs?).
- keep a history of all tree additions/changes/deletions

## Edge/Complex Cases

- Removing a label from the tree may be messy?
  - Gotta figure out what to do with all the descendants
  - Gotta figure out what to do with all the rules that reference the label

## Walking through some flows

### Brand New User

I'm a brand new user and I want to add new songs, starting with my favorite band BTS.
- Go to library
- Search "BTS"
- Can view artists, albums and songs
- View artists and click BTS
- Opens Artist Page for BTS
- Finds album I want, clicks album
- Decide I want to add the album to my tree
- Quick add button? Can have a few configurations
  - create artist label (if artist has not been created)
  - add album as descendant of artist (if artist has or will be created)
  - add any labels the artist is a descendant of (if artist has or will be created)
  - add any labels the album is a descendant of

**When viewing the library, important to focus the experience around adding new artists, albums and songs to the tree (and maybe jam sessions)**

## Pages

### Explore > Artist

Shows artists found for a search term

### Explore > Album

Shows albums found for a search term

### Explore > Song

Shows songs found for a search term

### Explore > Artist > {artistId}

Shows artist page for {artistId}. This includes
- Artist picture
- All the albums from the artist. Clicking on an album brings you to "Explore > Album > {albumId}"
- All the singles from an artist. Clicking on the single brings you to "Explore > Album > {songId}"
- Button to quick add the artist to your tree. Has a few configurations
  - choose which albums you want
    - choose which songs in each album you want? (low priority)
  - choose which singles you want
  - choose whether you want the artist and albums and singles to have hard connections
  - choose which labels you want to be parents
  - choose which labels you want to be children (maybe not?)
- Hard Connections
  - show whether artist has already been added to the tree

### Explore > Album > {albumId}

Show album page for {albumId}. This includes
- Details about the album
  - Artist (link to the artist)
  - Date album came out
  - length of album
  - album picture
- list of songs
- Button to quick add the album to your tree. Has a few configurations
  - choose whether you want the artist too? (idk when you wouldn't want the artist)
  - choose which songs you want? (low priority)
  - choose whether you want the artist/album/songss to have hard connections
  - choose which labels you want to be parents
  - choose which labels you want to be children (maybe not?)
- Hard Connections
  - show whether album has already been added to the tree

### Explore > Song > {songId}

Show song page for {songId}. This includes
- length of song
- artist (link to artist)
- album (link to album)
- Button to quick add the song to your tree. Has a few configurations
  - choose whether you want the artist, album and all songs on album
  - choose which labels you want to be parents
  - choose which labels you want to be children (maybe not?)
- Hard Connections
  - show whether album has already been added to the tree

### Tree

**The tree itself will probably get quite large and complex. I think it would be hard to just have a single tree view with a bunch of different actions, so I think it will be important to create a generic Tree component that will be reused in places when the customer needs to perform some action.**

Shows the tree. You kinda go layer by layer. So let's say I start at the top. I'll see the very top labels that don't have any parents, and I'll see their children. Clicking on one of the children will bring me down to that layer. Each layer is a carousel? Maybe I need to have a label selected for each layer and that determines which layer I'll see next. That could cause issues though if I want to see the parents of a deeper layer and kinda ruins the treeness.

Will probably need to mess around in sketch to figure out the best way to view the tree. However I should list all the functionality I think the tree will need so that we can make sure not to miss anything.
- add a new label. don't neccesarily need it on the tree, but I feel like i should use the tree component to select parent labels
- delete a label. will need some configurations for what to do with connected labels
- edit a label. don't neccesarily need it on the tree

### Jam Session > List

Lists all the jam sessions. Clicking on one takes you to the jam session page.

### Jam Session > {jamSessionId}

Show jam session page for {jamSessionId}.

