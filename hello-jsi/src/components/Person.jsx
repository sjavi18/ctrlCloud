import React from 'react'

const Person = ({info, hobbies, bio}) => {
 return(
     <>
 <p>Soy {info.name} y tengo {info.age} años. Nací en {info.bithday.getFullYear()} y mis hobbies son {hobbies.join(',')}</p>
{bio}
</>
 )
}

export default Person