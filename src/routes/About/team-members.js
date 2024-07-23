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

class MemberCV {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}

const cv_es = [
    new MemberCV('TITULO/CARGO (PERÍODO DE TIEMPO)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITULO/CARGO (PERÍODO DE TIEMPO)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITULO/CARGO (PERÍODO DE TIEMPO)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITULO/CARGO (PERÍODO DE TIEMPO)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
]

const cv_en = [
    new MemberCV('TITLE/CHARGE (TIME PERIOD)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITLE/CHARGE (TIME PERIOD)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITLE/CHARGE (TIME PERIOD)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITLE/CHARGE (TIME PERIOD)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
]


export const members = {
    es : [
        new Member('Nombre Apellido', '/menza-studio/assets/images/donald_sims.png', 'Posición/Profesión', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.', cv_es, '', '', ''),
        new Member('Nombre Apellido', '/menza-studio/assets/images/donald_sims.png', 'Posición/Profesión', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.', cv_es, '', '', ''),
    ],
    en: [
        new Member('Name Lastname', '/menza-studio/assets/images/donald_sims.png', 'Position/Profession', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.',cv_en, '', '', ''),
        new Member('Name Lastname', '/menza-studio/assets/images/donald_sims.png', 'Position/Profession', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.',cv_en, '', '', ''),
    ]
}