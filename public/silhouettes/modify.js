'use client'

const fs = require('fs/promises')
const path = require('path')
const { JSDOM } = require('jsdom') // You'll need to: npm install jsdom

function addBackgroundToSVG(svgString) {
  // Create a DOM environment
  const dom = new JSDOM(svgString)
  const document = dom.window.document
  const svg = document.documentElement

  // Get or create viewBox values
  let viewBox = svg.getAttribute('viewBox')
  let [minX, minY, width, height] = viewBox
    ? viewBox.split(' ').map(Number)
    : [0, 0, 24, 24]

  // Create background square
  const background = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  )
  background.setAttribute('x', minX)
  background.setAttribute('y', minY)
  background.setAttribute('width', width)
  background.setAttribute('height', height)
  background.setAttribute('fill', '#ffffff') // White background

  // Insert the background as the first child
  if (svg.firstChild) {
    svg.insertBefore(background, svg.firstChild)
  } else {
    svg.appendChild(background)
  }

  // Return the modified SVG string
  return svg.outerHTML
}

// Process multiple files
async function processFiles(inputDir, outputDir) {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true })

    // Process files from 1 to 20
    for (let i = 1; i <= 20; i++) {
      const inputFile = path.join(inputDir, `silhouette${i}.svg`)
      const outputFile = path.join(outputDir, `silhouette${i}_with_bg.svg`)

      try {
        // Read the SVG file
        const svgContent = await fs.readFile(inputFile, 'utf8')

        // Add background
        const modifiedSVG = addBackgroundToSVG(svgContent)

        // Write the modified SVG to new file
        await fs.writeFile(outputFile, modifiedSVG)

        console.log(`Processed: silhouette${i}.svg`)
      } catch (error) {
        console.error(`Error processing silhouette${i}.svg:`, error)
      }
    }

    console.log('All files processed')
  } catch (error) {
    console.error('Error:', error)
  }
}

// Function to process a single file
async function processSingleFile(inputFile, outputFile) {
  try {
    // Read the SVG file
    const svgContent = await fs.readFile(inputFile, 'utf8')

    // Add background
    const modifiedSVG = addBackgroundToSVG(svgContent)

    // Create output directory if it doesn't exist
    await fs.mkdir(path.dirname(outputFile), { recursive: true })

    // Write the modified SVG to new file
    await fs.writeFile(outputFile, modifiedSVG)

    console.log(`Processed: ${path.basename(inputFile)}`)
  } catch (error) {
    console.error(`Error processing ${inputFile}:`, error)
  }
}

// Example usage:
/*
// Process all files:
processFiles('./input', './output');

// Process single file:
processSingleFile(
    './input/silhouette1.svg',
    './output/silhouette1_with_bg.svg'
);
*/

processFiles('.', '.')

module.exports = {
  processFiles,
  processSingleFile
}
