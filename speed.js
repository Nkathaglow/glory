const speed = 80;
//declare the speed limit 
            const speedLimit = 70;
            const kmPerDemeritPoint = 5;
            if (speed <= speedLimit) {
            console.log("Ok");
            } //so if speed exceeds 70km/h it should output the demerit points
            else {
             const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
             console.log(`Demerit points: ${demeritPoints}`);
            }if (demeritPoints > 12) {
                console.log("License suspended")
            }//if the demerit points exceed 12 one should get the license suspended
            
  
