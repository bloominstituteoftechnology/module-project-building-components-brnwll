function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav
  function buildNav(links) {
    const nav = document.createElement('nav')
    links.map(link => {
      const a = linkBuilder(link.href, link.textContent)
      a.title = link.title
      nav.appendChild(a)
    })
    return nav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const learnerCard = document.createElement('div')
    learnerCard.classList.add('learner-card')
    let { fullName, id, dateOfBirth, favLanguage } = learner
    dateOfBirth = `Date of Birth: ${dateOfBirth}`
    favLanguage = `Favorite Language: ${languages.find(l => l.id === favLanguage).name}`
    id = `Learner ID: ${id}`
    Array(fullName, id, dateOfBirth, favLanguage).forEach(text => {
      const p = document.createElement('p')
      p.textContent = text
      learnerCard.appendChild(p)
    })
    learnerCard.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('active')) {
        const allLearnerCards = Array.from(e.currentTarget.parentElement.children)
        allLearnerCards.forEach(card => card.classList.remove('active'))
        e.currentTarget.classList.add('active')
      }
      e.stopPropagation()
    })
    return learnerCard
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    const learnerCardSection = document.querySelector('section')
    learners.map(learner => {
      learnerCardSection.appendChild(buildLearnerCard(learner, languages))
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer')
    footer.appendChild(buildFooterCompanyInfo(footerData))
    footer.appendChild(buildFooterSocialMediaLinks(footerData))
    const bloomtech = document.createElement('div')
    bloomtech.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2023'
    footer.appendChild(bloomtech)
    return footer
  }

  function buildFooterCompanyInfo(footerData) {
    const { companyName, address, contactEmail } = footerData
    const container = document.createElement('div')
    container.className = 'company-info'
    container.appendChild(pBuilder(companyName, 'company-name'))
    container.appendChild(pBuilder(address, 'address'))
    container.appendChild(pBuilder('Email: ', contactEmail, linkBuilder(`mailto:${contactEmail}`, contactEmail)))
    return container
  }

  function buildFooterSocialMediaLinks(footerData) {
    const { twitter, facebook, instagram } = footerData.socialMedia
    const container = document.createElement('div')
    container.className = 'social-media'
    container.appendChild(linkBuilder(twitter, 'Twitter'))
    container.appendChild(linkBuilder(facebook, 'Facebook'))
    container.appendChild(linkBuilder(instagram, 'Instagram'))
    return container
  }

  function pBuilder(text, className, child) {
    const p = document.createElement('p')
    p.textContent = text
    p.className = className
    if (child) {
      p.appendChild(child)
    }
    return p
  }

  function linkBuilder(url, text) {
    const a = document.createElement('a')
    a.href = url
    a.textContent = text
    return a
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  //  ✨ do your magic here
  document.querySelector('section').addEventListener('click', (e) => {
    Array.from(e.currentTarget.children).forEach(child => child.classList.remove('active'))
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
