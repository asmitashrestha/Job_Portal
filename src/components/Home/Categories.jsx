import CategoryItem from "./CategoryItem"

const Categories = ({name}) => {
  return (
    <div className="categories">
      <div className="popular">
        <h1 className="pop">{name}</h1>
      </div>
      <CategoryItem value="Technology"/>
      <CategoryItem value="Technology"/>
      <CategoryItem value="Technology"/>
      <CategoryItem value="Technology"/>
         
      </div>

  )
}

export default Categories
