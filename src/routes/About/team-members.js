class Member {
    constructor(name, src, position, description, cv, email, phone, linkedin){
        this.name = name;
        this.src = src;
        this.position = position;
        this.description = description;
        this.cv = cv;
        this.email = email;
        this.phone = phone;
        this.linkedin = linkedin;
    }
}


// class MemberCV {
//     constructor(where, when, description){
//         where = this.where;
//         when = this.when;
//         description = this.description;
//     }
// }

export const members = {
    es : [
        new Member('Nombre Apellido', '/menza-studio/assets/images/donald_sims.png', 'Posición/Profesión', '', [], '', '', ''),
        new Member('Nombre Apellido', '/menza-studio/assets/images/donald_sims.png', 'Posición/Profesión', '', [], '', '', ''),
    ],
    en: [
        new Member('Name Lastname', '/menza-studio/assets/images/donald_sims.png', 'Position/Profession', '',[], '', '', '', ''),
        new Member('Name Lastname', '/menza-studio/assets/images/donald_sims.png', 'Position/Profession', '',[], '', '', '', ''),
    ]
}