D=new Date()+''
if(c.title==D)return
c.title=D
c.width=c.height=200
x.fillStyle='#111'
x.fillRect(0,0,2e3,2e3)
x.translate(99,99)
z=Math.PI/2
x.arc(0,0,90,-z/60,7)
x.setLineDash([z,z*5])
x.lineWidth=3
x.strokeStyle=x.fillStyle='#fff'
x.stroke()
x.setLineDash([z*=3,z*9])
x.lineWidth=9
x.stroke()
L=(P,W,L)=>{
x.rotate(a=Math.PI*(2*P-1))
x.fillRect(-W/2,-6,W,L)
x.rotate(-a)}
D=D.slice(16,24).split`:`
L(D[0]%12/12,6,59)
L(D[1]/60,3,85)
x.fillStyle='#f00'
L(D[2]/60,2,99)