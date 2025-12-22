import ProfileCard from '../../components/ProfileCard'
import Macaron from '../../assets/macaron.jpg'
import FestiveCookies from '../../assets/FestiveCookies.jpg'
import Cookies from '../../assets/Cookies.jpg'

export default function PropsPage() {
  const cookies = [
    {
      name: "festive cookies",
      ingredients: ["flour", "sugar", "butter", "eggs", "vanilla", "sprinkles"],
      img: FestiveCookies,
      alt: "cookies shaped like santa"
    },
    {
      name: "chocolate cookies",
      ingredients: ["flour", "sugar", "butter", "cocoa powder", "chocolate chips", "eggs"],
      img: Cookies,
      alt: "pile of chocolate chip cookies"
    },
    {
      name: "macaron",
      ingredients: ["almond flour", "powdered sugar", "egg whites", "granulated sugar", "food coloring"],
      img: Macaron,
      alt: "pile of macarons"
    }
  ];

  const renderedCookies = cookies.map((cookie) => {
      return <ProfileCard name={cookie.name} ingredients={cookie.ingredients} key={cookie.name} img={cookie.img} alt={cookie.alt} />
  })
  return (
    <>
    <div className="mx-3 my-3">
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 min-h-screen gap-2 ">
    {renderedCookies}
    </div>
    </div>
    </>
  )
}
