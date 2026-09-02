import React, { useMemo, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import {
  Search, Heart, Clock3, ChefHat, Star, Plus, ArrowRight,
  Home as HomeIcon, BookOpen, UserRound, Menu, X, Flame,
  Leaf, Utensils, SlidersHorizontal
} from "lucide-react";
import { recipes as seedRecipes, categories } from "./data/recipes";

function App() {
  const [recipes, setRecipes] = useState(seedRecipes);
  const [favorites, setFavorites] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleFavorite = (id) =>
    setFavorites((f) => f.includes(id) ? f.filter(x => x !== id) : [...f, id]);

  const addRecipe = (recipe) => setRecipes((r) => [{ ...recipe, id: Date.now(), rating: 0, reviews: 0 }, ...r]);

  return (
    <div className="app">
      <header className="navbar">
        <Link className="brand" to="/" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark"><ChefHat size={21}/></span>
          <span>Recipe<span>Hub</span></span>
        </Link>

        <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/explore" onClick={() => setMobileOpen(false)}>Explore</Link>
          <Link to="/categories" onClick={() => setMobileOpen(false)}>Categories</Link>
          <Link to="/favorites" onClick={() => setMobileOpen(false)}>Favorites</Link>
        </nav>

        <div className="nav-actions">
          <Link className="add-btn" to="/add"><Plus size={18}/> Add Recipe</Link>
          <Link className="avatar" to="/profile">SC</Link>
          <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home recipes={recipes} favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/explore" element={<Explore recipes={recipes} favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/category/:name" element={<Explore recipes={recipes} favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/favorites" element={<Favorites recipes={recipes} favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/add" element={<AddRecipe onAdd={addRecipe}/>}/>
          <Route path="/profile" element={<Profile recipes={recipes} favorites={favorites}/>}/>
        </Routes>
      </main>

      <footer>
        <div className="footer-inner">
          <div><div className="brand footer-brand"><span className="brand-mark"><ChefHat size={19}/></span>Recipe<span>Hub</span></div><p>Discover recipes. Share your taste.</p></div>
          <div className="footer-links"><Link to="/explore">Explore</Link><Link to="/add">Share a Recipe</Link><Link to="/categories">Categories</Link></div>
          <p className="copyright">© 2026 RecipeHub</p>
        </div>
      </footer>
    </div>
  );
}

function Home({ recipes, favorites, toggleFavorite }) {
  const featured = recipes.slice(0, 3);
  return <>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Flame size={16}/> COMMUNITY COOKING</div>
        <h1>Good food brings<br/><em>people together.</em></h1>
        <p>Discover delicious recipes from home cooks around the world, or share your own secret recipe with the community.</p>
        <div className="hero-search">
          <Search size={20}/>
          <input placeholder="Search for recipes, ingredients..." onKeyDown={(e) => e.key === "Enter" && (window.location.href = `/explore?q=${e.currentTarget.value}`)}/>
          <Link to="/explore">Search</Link>
        </div>
        <div className="hero-stats"><span><b>1,200+</b> recipes</span><span><b>8k+</b> home cooks</span><span><b>25+</b> cuisines</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-circle"></div>
        <img src="/images/hero-food.svg" alt="Colorful bowl of food"/>
        <div className="floating-card"><span className="mini-avatar">AM</span><div><b>Amelia's Pasta</b><small>Added 2 min ago</small></div><Heart size={17} fill="currentColor"/></div>
      </div>
    </section>

    <section className="section">
      <SectionHeading eyebrow="EXPLORE" title="What's on your plate?" action="View all" to="/categories"/>
      <div className="category-row">
        {categories.map(c => <Link to={`/category/${c.name}`} className="category-card" key={c.name}>
          <img src={c.image} alt=""/><div><span>{c.emoji}</span><b>{c.name}</b><small>{c.count} recipes</small></div>
        </Link>)}
      </div>
    </section>

    <section className="section">
      <SectionHeading eyebrow="TRENDING NOW" title="Recipes everyone is loving" action="Explore all" to="/explore"/>
      <div className="recipe-grid">
        {featured.map(r => <RecipeCard key={r.id} recipe={r} favorite={favorites.includes(r.id)} onFavorite={toggleFavorite}/>)}
      </div>
    </section>

    <section className="share-banner">
      <div><span className="eyebrow">YOUR RECIPE MATTERS</span><h2>Cooked something amazing?</h2><p>Turn your family favorite into everyone's new favorite.</p></div>
      <Link to="/add" className="dark-btn">Share your recipe <ArrowRight size={18}/></Link>
    </section>
  </>;
}

function SectionHeading({eyebrow,title,action,to}) {
  return <div className="section-heading"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div>{action && <Link to={to}>{action} <ArrowRight size={16}/></Link>}</div>;
}

function RecipeCard({ recipe, favorite, onFavorite }) {
  return <article className="recipe-card">
    <Link to={`/recipe/${recipe.id}`} className="recipe-image-wrap">
      <img src={recipe.image} alt={recipe.name}/>
      <button className={favorite ? "heart active" : "heart"} onClick={(e) => {e.preventDefault(); onFavorite(recipe.id)}}><Heart size={18} fill={favorite ? "currentColor" : "none"}/></button>
      {recipe.badge && <span className="badge">{recipe.badge}</span>}
    </Link>
    <div className="recipe-content">
      <div className="card-meta"><span>{recipe.category}</span><span><Clock3 size={14}/> {recipe.time}</span></div>
      <Link to={`/recipe/${recipe.id}`}><h3>{recipe.name}</h3></Link>
      <p>{recipe.description}</p>
      <div className="card-bottom"><span className="author"><span>{recipe.authorInitials}</span>{recipe.author}</span><span className="rating"><Star size={15} fill="currentColor"/> {recipe.rating || "New"}</span></div>
    </div>
  </article>;
}

function Explore({ recipes, favorites, toggleFavorite }) {
  const params = new URLSearchParams(window.location.search);
  const initial = params.get("q") || "";
  const pathName = decodeURIComponent(useParams().name || "");
  const [search, setSearch] = useState(initial);
  const [category, setCategory] = useState(pathName);
  const [type, setType] = useState("All");

  const filtered = useMemo(() => recipes.filter(r =>
    (!search || `${r.name} ${r.description} ${r.category}`.toLowerCase().includes(search.toLowerCase())) &&
    (!category || r.category === category) &&
    (type === "All" || r.type === type)
  ), [recipes, search, category, type]);

  return <section className="section explore-page">
    <div className="page-title"><div className="eyebrow">RECIPE LIBRARY</div><h1>Find your next favorite</h1><p>From quick weeknight meals to weekend projects.</p></div>
    <div className="filters">
      <div className="filter-search"><Search size={19}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search recipes..."/></div>
      <select value={category} onChange={e=>setCategory(e.target.value)}><option value="">All categories</option>{categories.map(c=><option key={c.name}>{c.name}</option>)}</select>
      <select value={type} onChange={e=>setType(e.target.value)}><option>All</option><option>Veg</option><option>Non-Veg</option></select>
      <button className="outline-btn"><SlidersHorizontal size={17}/> Filters</button>
    </div>
    <div className="results-line"><span><b>{filtered.length}</b> recipes found</span></div>
    <div className="recipe-grid">{filtered.map(r=><RecipeCard key={r.id} recipe={r} favorite={favorites.includes(r.id)} onFavorite={toggleFavorite}/>)}</div>
    {!filtered.length && <div className="empty"><Utensils size={38}/><h3>No recipes found</h3><p>Try another search or category.</p></div>}
  </section>;
}

function Categories() {
  return <section className="section"><div className="page-title"><div className="eyebrow">BROWSE</div><h1>Explore by category</h1><p>Whatever you're craving, there's a recipe for it.</p></div><div className="category-large-grid">{categories.concat([{name:"Breakfast",emoji:"🍳",count:86,image:"/images/breakfast.svg"},{name:"Soups",emoji:"🍲",count:54,image:"/images/soup.svg"}]).map(c=><Link to={`/category/${c.name}`} className="category-large" key={c.name}><img src={c.image} alt=""/><div><span>{c.emoji}</span><h3>{c.name}</h3><p>{c.count} recipes</p></div></Link>)}</div></section>;
}

function RecipeDetails({ recipes, favorites, toggleFavorite }) {
  const { id } = useParams();
  const recipe = recipes.find(r => String(r.id) === id);
  if (!recipe) return <div className="empty"><h2>Recipe not found</h2><Link to="/explore">Back to recipes</Link></div>;
  return <section className="section detail-page">
    <Link to="/explore" className="back-link">← Back to recipes</Link>
    <div className="detail-grid">
      <div><img className="detail-image" src={recipe.image} alt={recipe.name}/></div>
      <div className="detail-copy">
        <div className="card-meta"><span>{recipe.category}</span><span>{recipe.type}</span></div>
        <h1>{recipe.name}</h1><p className="lead">{recipe.description}</p>
        <div className="detail-stats"><span><Clock3/><b>{recipe.time}</b><small>Total time</small></span><span><ChefHat/><b>{recipe.difficulty}</b><small>Difficulty</small></span><span><Star fill="currentColor"/><b>{recipe.rating || "New"}</b><small>Rating</small></span></div>
        <div className="detail-author"><span className="big-avatar">{recipe.authorInitials}</span><div>Recipe by <b>{recipe.author}</b><small>Home cook</small></div><button className={favorites.includes(recipe.id) ? "save-btn saved" : "save-btn"} onClick={()=>toggleFavorite(recipe.id)}><Heart size={18} fill={favorites.includes(recipe.id) ? "currentColor":"none"}/> {favorites.includes(recipe.id) ? "Saved":"Save"}</button></div>
      </div>
    </div>
    <div className="recipe-instructions">
      <div><h2>Ingredients</h2><ul className="ingredients">{recipe.ingredients.map((x,i)=><li key={i}><span>{x.amount}</span>{x.name}</li>)}</ul></div>
      <div><h2>How to make it</h2><div className="steps">{recipe.steps.map((x,i)=><div className="step" key={i}><b>{String(i+1).padStart(2,"0")}</b><p>{x}</p></div>)}</div></div>
    </div>
  </section>;
}

function Favorites({ recipes, favorites, toggleFavorite }) {
  const saved = recipes.filter(r => favorites.includes(r.id));
  return <section className="section"><div className="page-title"><div className="eyebrow">YOUR COLLECTION</div><h1>Saved recipes</h1><p>Keep the recipes you want to cook again.</p></div>{saved.length ? <div className="recipe-grid">{saved.map(r=><RecipeCard key={r.id} recipe={r} favorite onFavorite={toggleFavorite}/>)}</div> : <div className="empty"><Heart size={38}/><h3>Your cookbook is empty</h3><p>Save recipes you love and they'll appear here.</p><Link className="dark-btn" to="/explore">Explore recipes</Link></div>}</section>;
}

function AddRecipe({ onAdd }) {
  const navigate = useNavigate();
  const [form,setForm] = useState({name:"",description:"",category:"Indian",type:"Veg",time:"30 min",difficulty:"Easy",ingredients:"",steps:""});
  const change = (e) => setForm({...form,[e.target.name]:e.target.value});
  const submit = (e) => {
    e.preventDefault();
    onAdd({...form,image:"/images/recipe-default.svg",author:"You",authorInitials:"YU",ingredients:form.ingredients.split("\n").filter(Boolean).map(x=>{const [amount,...rest]=x.split("|");return {amount,name:rest.join("|")||amount}}),steps:form.steps.split("\n").filter(Boolean),badge:"NEW"});
    navigate("/explore");
  };
  return <section className="section add-page"><div className="page-title"><div className="eyebrow">SHARE WITH THE COMMUNITY</div><h1>Publish a recipe</h1><p>Share the dish that makes people ask for seconds.</p></div><form className="recipe-form" onSubmit={submit}>
    <div className="form-card"><h2>Recipe basics</h2><label>Recipe name<input required name="name" value={form.name} onChange={change} placeholder="e.g. Creamy Garlic Pasta"/></label><label>Description<textarea required name="description" value={form.description} onChange={change} placeholder="Tell people what makes this recipe special..."/></label><div className="form-row"><label>Category<select name="category" value={form.category} onChange={change}>{categories.map(c=><option key={c.name}>{c.name}</option>)}</select></label><label>Type<select name="type" value={form.type} onChange={change}><option>Veg</option><option>Non-Veg</option></select></label></div><div className="form-row"><label>Time<select name="time" value={form.time} onChange={change}><option>15 min</option><option>30 min</option><option>45 min</option><option>60 min</option><option>90 min</option></select></label><label>Difficulty<select name="difficulty" value={form.difficulty} onChange={change}><option>Easy</option><option>Medium</option><option>Hard</option></select></label></div></div>
    <div className="form-card"><h2>Ingredients & steps</h2><label>Ingredients <small>One per line: amount | ingredient</small><textarea required name="ingredients" value={form.ingredients} onChange={change} placeholder={"2 cups | Pasta\n3 cloves | Garlic\n1 tbsp | Olive oil"}/></label><label>Instructions <small>One step per line</small><textarea required name="steps" value={form.steps} onChange={change} placeholder={"Boil the pasta until al dente.\nHeat oil and sauté garlic.\nToss pasta with sauce and serve."}/></label><button className="dark-btn submit-btn" type="submit">Publish recipe <ArrowRight size={18}/></button></div>
  </form></section>;
}

function Profile({recipes,favorites}) {
  return <section className="section profile-page"><div className="profile-head"><div className="profile-avatar">SC</div><div><div className="eyebrow">MY PROFILE</div><h1>Home Cook</h1><p>Sharing good food, one recipe at a time.</p></div><Link to="/add" className="dark-btn"><Plus size={18}/> Add recipe</Link></div><div className="profile-stats"><div><b>{recipes.length}</b><span>Recipes shared</span></div><div><b>{favorites.length}</b><span>Saved recipes</span></div><div><b>4.8</b><span>Average rating</span></div></div><SectionHeading eyebrow="YOUR RECIPES" title="Recipes you've shared"/><div className="recipe-grid">{recipes.slice(0,3).map(r=><RecipeCard key={r.id} recipe={r} favorite={favorites.includes(r.id)} onFavorite={()=>{}}/>)}</div></section>;
}

export default App;