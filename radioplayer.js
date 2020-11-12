// 1: Gör en fetch till 'http://api.sr.se/api/v2/channels/?format=json'


fetch('http://api.sr.se/api/v2/channels/?format=json')
  .then(response => response.json())
  .then(data => {
    showRadioPlayers(data);
  })

  // 2: Loopa med tex. forEach över data.channels - ta u data och visa
// på html-sidan.

  function showRadioPlayers(data){
    const channelsElement = document.querySelector('#channels')

    data.channels.forEach((channel) => {
      const divElement = document.createElement('div');
      divElement.innerHTML =
      `<div>
        <img src="${channel.imagetemplate}" class="image">
        <audio controls class="audioPlayer">
          <source src="${channel.liveaudio.url}" type="audio/mpeg"/>
        </audio>
      </div>`;
      channelsElement.appendChild(divElement);
    });

  }

// 3: Ta ut liveaudio.url från varje kanal och lägg i en audio tag.

