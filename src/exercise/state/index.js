const makeTeacher = (id, url, firstname, lastname, subjectIDs) => {
  return {id, url, firstname, lastname, subjectIDs}
}

const makeCategory = (id, name) => { return {id, name} }

const makeSubject = (id, title, hourAmount, semester, description, categoryID, teacherIDs) => {
  return {id, title, hourAmount, semester, description, categoryID, teacherIDs}
}

export default {
  teachers: [
    makeTeacher('az89d', 'images/img1.jpg', 'Des sous chauds', 'Lucas', ['et98h']),
    makeTeacher('ht4y4', 'images/img2.jpg', 'Venceslas', 'Biri', ['rj498']),
    makeTeacher('zz8gg', 'images/img3.jpg', 'Tortue', 'Géniale', ['tr7iy', 'et78j']),
    makeTeacher('tyk78', 'images/img4.jpg', 'Vincent', 'Nozick', ['rj498', 'rty78']),
    makeTeacher('up4oi', 'images/img5.jpg', 'Gaetan', 'Robillard', ['et78j'])
  ],
  categories: [
    makeCategory('zh4rt', 'Science'),
    makeCategory('rj65g', 'Art')
  ],
  subjects: [
    makeSubject('et98h', 'Ouaibe', 2, ['1', '2', '4', '5'], 'On fait du code et ca fait des sites.', 'zh4rt', ['az89d']),
    makeSubject('rj498', 'Triangles en 3D sur ordinateur', 4, ['2', '3', '5'], 'On fait du code et ca fait des segfault et parfois des images jolies.', 'zh4rt', ['ht4y4']),
    makeSubject('tr7iy', 'Ninjutsu', 4, ['5', '6'], 'C\'est l\'art de faire des pirouettes, des galipettes et à la fin tu tue tes ennemis.', 'rj65g', ['zz8gg']),
    makeSubject('rty78', 'Mathématiques', 8, ['1', '2', '3', '4'], 'C\'est l\'art de faire des pirouettes, des galipettes et à la fin tu tue tes ennemis.', 'zh4rt', ['tyk78']),
    makeSubject('et78j', 'Méditation', 2, ['1', '2'], 'C\'est pour les personnes souffrantes.', 'zh4rt', ['up4oi', 'zz8gg'])
  ]
}
