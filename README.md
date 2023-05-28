# sharecode

add css line of Rec.css into your App.css (beware of className conflicts)
add Recommend.js and Bmi.js into src folder (./) 
add all photos into images folder of assets2 
add Normal.js,Obese.js, Overweight.js and Underweight.js into a new folder named "bmass" inside components2 folder

add this useState before return in main page where we put 'routes' (probably HomeLayout (not sure))
 const [present, setPresent] = useState('');
 
also add these routes into the same file
                 <Route path="/reco" element={<Recommend setPresent={setPresent} />} />
                 <Route path="/bmi" element={<Bmi present={present} />} />
        
