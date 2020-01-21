class Car  {
    carNumber;
    run() {
return 60
    }
}
class MaruthiSuziki extends Car{
    run() {
        return super.run()+80;
    }
}

var ms=new MaruthiSuziki();
console.log(ms.run())
