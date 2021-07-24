
// header mobile menu
{
    const button = document.getElementById('nav-button');
    const hc = document.getElementById('header-content');

    button.addEventListener('click', () => {
        button.classList.toggle('active');
        hc.classList.toggle('active');
    });
}

// video autoplay
document.querySelectorAll('[video]') && document.querySelectorAll('[video]').forEach(item => item.play());

// scroll
{
    // scroll
    const scroll = document.querySelectorAll('.levus-horizontal-scroll');

    scroll.forEach(item => {
        const ul = item.querySelector('ul');

        // elements
        let li = ul.querySelectorAll('li');

        // if less than 4, cloned 
        if (li.length <= 4) {

            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)));

            // new nodelist
            li = item.querySelectorAll('li');
        }

        item.innerHTML += '<div class="levus-nav"><span class="left"></span><span class="right"></span></div>';

        item.addEventListener('click', e => {
            const ul = item.querySelector('ul');
            if (e.target.className == 'left') {

                // move last element
                const last = ul.lastElementChild;
                ul.prepend(last);

                // destroy transition
                ul.style.transition = 'none';
                ul.classList.add('to-right');
                setTimeout(() => {
                    ul.classList.remove('to-right');
                    ul.style.transition = '.5s';
                }, 50);
            }
        });

        item.addEventListener('click', e => {
            const ul = item.querySelector('ul');
            if (e.target.className == 'right') {

                // move first element
                const first = ul.firstElementChild;
                ul.append(first);

                // destroy transition
                ul.style.transition = 'none';
                ul.classList.add('to-left');
                setTimeout(() => {
                    ul.classList.remove('to-left');
                    ul.style.transition = '.5s';
                }, 50);
            }
        });

        setInterval(() => {
            const ul = item.querySelector('ul');

            // move first element
            const first = ul.firstElementChild;
            ul.append(first);

            // destroy transition
            ul.style.transition = 'none';
            ul.classList.add('to-left');

            setTimeout(() => {
                ul.classList.remove('to-left');
                ul.style.transition = '.5s';
            }, 50);
         
        }, 3500);
        
    });
}

// right element disabled
// TODO: not video.html
{
    // const wb = document.querySelector('*:not(#video) .wrapper-background');
    const wb = document.querySelector('.wrapper-background');

    if(wb.offsetHeight > 1200 && wb.offsetHeight < 1800){
        wb.classList.add('disabled');
    } else {
        wb.classList.remove('disabled');
    }
}

// search
{
    document.getElementById('search-button').addEventListener('click', function() {
        this.classList.toggle('active');
        document.getElementById('search').classList.toggle('active');
    });
}