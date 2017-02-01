import PersonService from './person_service';

const people = PersonService.getPeople();

people.forEach(person => console.log(person.firstName));

