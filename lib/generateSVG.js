function generateSvg(answers) {
    
    // make if statements based on answers
    return `
    <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="${answers.shapeColor}" />
  <text x="65" y="55" class="Rrrrr">Grumpy!</text>
</svg>`
}

module.exports = generateSvg; 