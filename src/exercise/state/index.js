const makeTeacher = (id, url, firstname, lastname, subjects) => {
  return {id, url, firstname, lastname, subjects}
}

const makeSubject = (id, title, category, hourAmount, semester, description, teacherId) => {
  return {id, title, category, hourAmount, semester, description, teacherId}
}

export default {
  teachers: [
    makeTeacher('az89d', 'img1.jpg', 'Des sous chauds', 'Lucas', ['et98h']),
    makeTeacher('ht4y4', 'img2.jpg', 'Biri', 'Venceslas', ['rj498'])
  ],
  subjects: [
    makeSubject('et98h', 'Ouaibe', 'Science', 2, ['1', '2', '4', '5'], 'On fait du code et ca fait des sites.', ['az89d']),
    makeSubject('rj498', 'Triangles en 3D sur ordinateur', 'Science', 4, ['2', '3', '5'], 'On fait du code et ca fait des segfault et parfois des images jolies.', ['ht4y4'])
  ]
}
