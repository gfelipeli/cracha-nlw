const socialMedia = {
  linkedin: 'gfelipeli',
  github: 'gfelipeli',
  instagram: 'gfelipeli'
}

function changeSocialMedialInks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}
changeSocialMedialInks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
