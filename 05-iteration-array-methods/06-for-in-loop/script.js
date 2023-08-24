const colorObj = {
    color1: 'blue',
    color2: 'green',
    color3: 'yelow',
    color4: 'red',
    color5: 'brown'
}

for (const key in colorObj) {
    console.log(key, colorObj[key])
} 

const colorArray = ['blue', 'green', 'yellow', 'red', 'brown']
for (const key in colorArray) {
   console.log(colorArray[key])
}