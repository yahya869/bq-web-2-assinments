async function getGithubUser() {
    const userName = document.getElementById('userName').value;
    const card = document.getElementById('card');
    try {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        if (!res.ok) throw new Error("User is Not Found");
         const data = await res.json();
         // cart info:
         document.getElementById('img').src = data.avatar_url;
         document.getElementById('name').textContent = data.name;
         document.getElementById('bio').textContent = data.bio;
         document.getElementById('email').textContent = data.email;
         document.getElementById('type').textContent = data.type;
         document.getElementById('created_at').textContent = data.created_at;
         document.getElementById('updated_at').textContent = data.updated_at;
         document.getElementById('location').textContent = data.location;
         document.getElementById('company').textContent = data.company;
         document.getElementById('followers').textContent = data.followers;
         document.getElementById('following').textContent = data.following;
         document.getElementById('public_repos').textContent = data.public_repos;
         document.getElementById('public_gists').textContent = data.public_gists;
         document.getElementById('user_view_type').textContent = data.user_view_type;
         document.getElementById('profile_link').href = data.html_url;
         
         card.style.display="block";
        } catch (error) {
            card.style.display="none";
        alert('User Not Found!');
    }
    
}