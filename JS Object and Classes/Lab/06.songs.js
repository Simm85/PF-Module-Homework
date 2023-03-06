function songs(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsNumber = array.shift();
    let typeList = array.pop();
    let songs = [];

    for (let songData of array) {
        songData = songData.split('_');
        let [typeList, name, time] = songData;
        songs.push(new Song(typeList, name, time));
    }

    for (let song of songs) {
        if (typeList === song.typeList) {
            console.log(song.name);
        } else if (typeList === 'all') console.log(song.name);
    }
}
//songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01','favourite']);

//songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);

songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);