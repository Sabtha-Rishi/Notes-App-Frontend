import { GiMedicines } from "react-icons/gi";
import { MdNoFood } from "react-icons/md";
import {
  FaTshirt,
  FaPlane,
  FaHandsHelping,
  FaPiggyBank,
  FaMoneyBill,
} from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { RiBillFill, RiNetflixFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";

const CATEGORY_DATA = {
  icons: {
    others: <FaMoneyBill />,
    food: <MdNoFood />,
    medicines: <GiMedicines />,
    fashion: <FaTshirt />,
    sport: <AiFillTrophy />,
    bills: <RiBillFill />,
    entertainment: <RiNetflixFill />,
    travel: <FaPlane />,
    charity: <FaHandsHelping />,
    savings: <FaPiggyBank />,
    investment: "",
    work: <MdWork />,
    groceries: <BsBasket3Fill />,
  },

  options: [
    "Others",
    "Food",
    "Medicines",
    "Fashion",
    "Sport",
    "Bills",
    "Entertainment",
    "Travel",
    "Charity",
    "Savings",
    "Investment",
    "Work",
    "Groceries",
  ],
};

export default CATEGORY_DATA;
