document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const likeBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
    let count = 0;
    let likes = {};
    let timer;

    function startTimer() {
        timer = setInterval(() => {
            count++;
            counter.textContent = count;
        }, 1000);
    }

    startTimer();

    plusBtn.addEventListener('click', function() {
        count++;
        counter.textContent = count;
    });

    minusBtn.addEventListener('click', function() {
        count--;
        counter.textContent = count;
    });

    likeBtn.addEventListener('click', function() {
        if (!likes[count]) {
            likes[count] = 1;
        } else {
            likes[count]++;
        }
        renderLikes();
    });

    pauseBtn.addEventListener('click', function() {
        if (pauseBtn.textContent === 'pause') {
            clearInterval(timer);
            plusBtn.disabled = true;
            minusBtn.disabled = true;
            likeBtn.disabled = true;
            commentInput.disabled = true;
            pauseBtn.textContent = 'resume';
        } else {
            startTimer();
            plusBtn.disabled = false;
            minusBtn.disabled = false;
            likeBtn.disabled = false;
            commentInput.disabled = false;
            pauseBtn.textContent = 'pause';
        }
    });

    function renderLikes() {
        likesList.innerHTML = '';
        for (const number in likes) {
            const li = document.createElement('li');
            li.textContent = `${number}: ${likes[number]} likes`;
            likesList.appendChild(li);
        }
    }

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const comment = commentInput.value.trim();
        if (comment !== '') {
            const commentItem = document.createElement('div');
            commentItem.textContent = comment;
            commentList.appendChild(commentItem);
            commentInput.value = '';
        }
    });
});
