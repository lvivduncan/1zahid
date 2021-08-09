
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

    if(wb !== null){
        if(wb.offsetHeight > 1200 && wb.offsetHeight < 1800){
            wb.classList.add('disabled');
        } else {
            wb.classList.remove('disabled');
        }
    }
}

// search
{
    document.getElementById('search-button').addEventListener('click', function() {
        this.classList.toggle('active');
        document.getElementById('search').classList.toggle('active');
    });
}

// обгортка для іфреймів
{
    const iframe = document.querySelectorAll('iframe');

    if (iframe.length > 0) {
        iframe.forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.className = 'iframe-wrapper';
            const iframe = item.cloneNode(true);
            item.replaceWith(wrapper);
            wrapper.append(iframe);
        });
    }
}
/* 
// обгортка для таблиць
{
    const table = document.querySelectorAll('table');

    if (table.length > 0) {
      table.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'levus-table-wrapper';
        const table = item.cloneNode(true);
        item.replaceWith(wrapper);
        wrapper.append(table);
      });
    }
}
 */
// шарбатони
{
    const fb = document.querySelector('.share-buttons .facebook');

    fb && fb.addEventListener('click', e => {
        e.preventDefault();
        const url = 'https://facebook.com/sharer.php?display=popup&u=' + window.location.href;
        const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
        window.open(url, 'sharer', options);
    });

    const tw = document.querySelector('.share-buttons .twitter');

    tw && tw.addEventListener('click', e => {
        e.preventDefault();
        const url = 'https://twitter.com/intent/tweet?text=' + document.title + ' ' + window.location.href;
        const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
        window.open(url, 'twitter', options);
    });
    
    const tg = document.querySelector('.share-buttons .telegram');

    tg && tg.addEventListener('click', e => {
        e.preventDefault();
        const url = 'https://telegram.me/share/url?url=' + window.location.href + '&text=' + document.title;
        const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
        window.open(url, 'telegram', options);
    });
}