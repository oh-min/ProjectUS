/**
 * 
 */
window.onload = function() {
	/* 01. new Date() */
	// 현재 시간 및 날짜
	let a = new Date() // Thu Dec 08 2022 16:33:25 GMT+0900 (한국 표준시)
	console.log(a)
	/* 02. new Date(value) */
	// https://awebanalysis.com/ko/unix-timestamp-converter/
	// http://chongmoa.com/unixtime
	// value : unix타임스탬프 값
	let b = new Date(1104879600)
	console.log(b)
	//	let c = new Date(dateString)
	let c = new Date('2022-12-08')
	console.log(c)

	new Date(year, monthIndex)
	new Date(year, monthIndex, day)
	new Date(year, monthIndex, day, hours)
	new Date(year, monthIndex, day, hours, minutes)
	new Date(year, monthIndex, day, hours, minutes, seconds)
	new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

}