function generateSvg(answers) {
    
    // make if statements based on answers
    return `
    <svg width="300" height="200">
  <circle cx="50" cy="50" r="40" fill="${answers.shapeColor}" />
  <text x="35" y="55" fill="${answers.textColor}" class="Rrrrr">${answers.logoCharacters}</text>
</svg>`
}

module.exports = generateSvg; 