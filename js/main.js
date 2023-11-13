let marks = parseInt(prompt('What is your marks'))

switch (true) {
    case marks == 100:
        alert('A+')
        break;
    case marks > 90:
        alert('A')
        break;
    case marks > 80:
        alert('B+')
        break;
    case marks > 70:
        alert('Distiction')
        break;
    case marks > 60:
        alert('C+')
        break;
    case marks > 50:
        alert('Passed')
        break;
    default:
        alert('Failed')
        break;
}