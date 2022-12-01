function diceroll(gif1){
	rollbut.classList.add("startroll");
	for (var elf = 0; elf < 20; elf++) { 
		gif1.classList.remove("png"+elf);
	}
	var mince_pie = Math.floor(Math.random() * 20) + 1;
	gif1.classList.toggle("roll"+mince_pie);
	setTimeout( ()=> {
		gif1.classList.add("png"+mince_pie);
		gif1.classList.remove("roll"+mince_pie);
		rollbut.classList.remove("startroll");
		rollbut.classList.add("afterroll");
	}, 5000);
	}