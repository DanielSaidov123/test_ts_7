import fs from 'fs/promises';

export async function readFromFile(fileName : string) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    return JSON.parse(data);  
  } catch (err) {
    console.error("שגיאה בקריאה מהקובץ:", err);
    return null;
  }
}

export async function writeToFile(fileName : string, data : object) {
  try {
 
    await fs.writeFile(fileName, JSON.stringify(data, null, 2));
    console.log('הקובץ נכתב בהצלחה');

  } catch (err) {
    console.error('שגיאה בכתיבה לקובץ:', err);
  }
}

//  writeToFile('data.json', { name: 'Daniel', age: 17 });


// const data = await readFromFile("data.txt");
// console.log(data);

export async function readFromFiletxt(fileName: string) {
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    return data;
  } catch (err) {
    console.error('שגיאה בקריאה מהקובץ:', err);
    return null;
  }
}


export async function writeToFiletxt(fileName : string, data : number) {
  try {
 
    await fs.writeFile(fileName, JSON.stringify(data, null, 2));
    console.log('הקובץ נכתב בהצלחה');

  } catch (err) {
    console.error('שגיאה בכתיבה לקובץ:', err);
  }
}
// const data = await readFromFiletxt('budget.txt');
// console.log(data);
