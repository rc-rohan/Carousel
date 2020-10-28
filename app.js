document.getElementById("toLeft").addEventListener("click", () => {
	transitionAll('left');
});

document.getElementById("toRight").addEventListener("click", () => {
	transitionAll('right');
});

function transitionAll(dir) {
	const list = document.querySelector('.carousel')
  const items = document.querySelectorAll(".contributors");
	if (dir === 'left') {
  	items.forEach(item => {
			item.style.setProperty('transform', `translateX(${(item.clientWidth + 42) * -1}px)`)
			item.style.setProperty('transition-duration', '0s')
		});
		list.prepend(items[items.length -1])
		setTimeout(() => {
			items.forEach(item => {
				item.style.setProperty('transform', `translateX(0px)`)
				item.style.setProperty('transition-duration', '300ms')
			});
		}, 50);
	}
	else if (dir === 'right') {
    items.forEach(item => {
			item.style.setProperty('transform', `translateX(${(item.clientWidth + 42) * -1}px)`)
			item.style.setProperty('transition-duration', '300ms')
		});
		setTimeout(() => {
      list.append(items[0])
      items.forEach(item => {
        item.style.setProperty('transform', `translateX(0px)`)
        item.style.setProperty('transition-duration', '0s')
      });
		}, 300);
	}
}