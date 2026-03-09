document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/gitanpf')
        .then (function(resposta){
            return resposta.json();
        })
        .then(function(json){
            nameElement.innerHTML = json.name;
            usernameElement.innerHTML = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerHTML = `Repositórios <br>${json.public_repos}`;
            followersElement.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            linkElement.href = json.html_url;
        })
        
        fetch('https://api.github.com/users/gitanpf/followers')
        .then(resposta => resposta.json())
        .then(followers => {
            followersElement.innerHTML = `Seguidores <br>${followers.length}`;
        });

        fetch('https://api.github.com/users/gitanpf/followers')
        .then(resposta => resposta.json())
        .then(following => {
            followingElement.innerHTML = `Seguindo <br>${following.length}`;
        });
    })
.catch(function(error) {
    console.log('Ocorreu um erro:', error);
});
