function calcSalary(personalRelief, netSalary,totalDeductions, contribitionBenefit,NHIFDeductions, NSSFDeductions, grossSalary, taxableIncome){
    let paye;
    grossSalary=
    contributionBenefit=
    NHIFDeductions=
    NSSFDeductions=
    personalRelief=
    //this is how we'll get the taxable income
     totalDeductions = (contributionBenefit + NHIFDeductions +NSSFDeductions + personalRelief);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)
    //these are the rates at which tax is paid
    switch(true){
        case (taxableIncome < 288000):
            paye = taxableIncome * 0.1;
            break;
        case (taxableIncome = 388000):
            paye = taxableIncome * 0.2;
            break;
        case (taxableIncome > 388000):
            paye = taxableIncome * 0.3;
            break;  
        }
    // This should give us the net salary
    netS
    console.log(`your netSalary is ksh: ${netSalary}`)
    }
