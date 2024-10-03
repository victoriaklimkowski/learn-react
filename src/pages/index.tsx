import List from "./qcomps/list_keys_id";
import RecipeList from "./qcomps/recipes";
import Gallery from "./qcomps/state";
import Form from "./qcomps/stuckForm";
import FeedbackForm from "./qcomps/thankYouCrash";

export default function Home() {
  return (
    <>
      <FeedbackForm />
      <Form />  
      <Gallery />
      <RecipeList />
      <List />
    </>
  )
}
