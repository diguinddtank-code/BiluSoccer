const fs = require('fs');
const path = require('path');

const replacement = `        <div 
          className="relative w-full overflow-hidden mt-8 max-w-[100vw] mx-auto flex flex-col gap-4"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <motion.div
            className="flex w-max gap-4 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...flags, ...flags].map((code, i) => (
              <div key={"row1-" + code + "-" + i} className="shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={"https://flagcdn.com/w80/" + code + ".png"} 
                  alt={code + " flag"}
                  className="w-16 h-11 md:w-20 md:h-14 object-cover rounded shadow-lg filter hover:brightness-125 hover:scale-105 transition-all"
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex w-max gap-4 py-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...[...flags].reverse(), ...[...flags].reverse()].map((code, i) => (
              <div key={"row2-" + code + "-" + i} className="shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={"https://flagcdn.com/w80/" + code + ".png"} 
                  alt={code + " flag"}
                  className="w-16 h-11 md:w-20 md:h-14 object-cover rounded shadow-lg filter hover:brightness-125 hover:scale-105 transition-all"
                />
              </div>
            ))}
          </motion.div>
        </div>`;

const searchRegex = /<div\s+className="relative w-full overflow-hidden mt-8 max-w-\[100vw\] mx-auto"[\s\S]*?<\/motion\.div>\s*<\/div>/;

const filesToUpdate = [
  'app/programs/summer-camps/page.tsx',
  'app/programs/academy-development/page.tsx',
  'app/programs/junior-academy/page.tsx',
  'app/programs/elite/page.tsx',
  'app/programs/futsal/page.tsx',
];

filesToUpdate.forEach(f => {
  const file = path.join(process.cwd(), f);
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const newContent = content.replace(searchRegex, replacement);
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated ' + f);
    } else {
      console.log('No match found in ' + f);
    }
  } else {
    console.log('Not found: ' + f);
  }
});
