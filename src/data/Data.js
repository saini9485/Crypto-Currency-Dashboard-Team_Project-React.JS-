// sidebar icons
import {
  RiHandCoinLine,
  RiWallet3Line,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
} from "react-icons/ri";
import { TbLayoutDashboard } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePolicy } from "react-icons/md";

// team-members images import
import member1 from "../Assets/Images/mofi.jpg";
import member2 from "../Assets/Images/Rajesh1.jpeg";
import member3 from "../Assets/Images/abhi.jpg";

// sidebar links
export const SidebarData = [
  {
    path: "/dashboard",
    icon: <TbLayoutDashboard />,
    title: "Dashboard",
  },
  {
    path: "/coins",
    icon: <RiWallet3Line />,
    title: "Coins",
  },
  {
    path: "/faq",
    icon: <BsQuestionCircle />,
    title: "FAQ",
  },
  {
    path: "/blog",
    icon: <FaBlog />,
    title: "Blog",
  },
  {
    path: "/team",
    icon: <RiHandCoinLine />,
    title: "Core Team",
  },
  {
    path: "/support",
    icon: <BiSupport />,
    title: "Support Channel",
  },
  {
    path: "/policy",
    icon: <MdOutlinePolicy />,
    title: "Privacy Policy",
  },
];

// Core Team member
export const Members = [
  {
    img: member1,
    name: "Mofijul Haque",
    title: "Team Leader",
    linkedin: "https://www.linkedin.com/in/mofijul-haque-359941230/",
    icon1: <RiLinkedinFill />,
    github: "https://github.com/MOFIJULHAQUE",
    icon2: <RiGithubFill />,
    twitter: "https://twitter.com/Mofijul71136321",
    icon3: <RiTwitterFill />,
  },
  {
    img: member2,
    name: "Rajesh Saini",
    title: "Team Member",
    linkedin: "https://www.linkedin.com/in/rajesh-saini9485//",
    icon1: <RiLinkedinFill />,
    github: "https://github.com/saini9485",
    icon2: <RiGithubFill />,
    twitter: "https://twitter.com/Mofijul71136321",
    icon3: <RiTwitterFill />,
  },
  {
    img: member3,
    name: "Abhishek Kolapkar",
    title: "Team Member",
    linkedin: "https://www.linkedin.com/in/abhi-kolapkar",
    icon1: <RiLinkedinFill />,
    github: "https://github.com/Pro-Abhi",
    icon2: <RiGithubFill />,
    twitter: "https://twitter.com/Mofijul71136321",
    icon3: <RiTwitterFill />,
  },
];

// Policy text
export const PolicyText = () => {
  return (
    <>
      <div>
        The websites and/or mobile app operated under the brand names –
        <b>“CryptoTrade”</b> collectively known as the (“Platform”) is owned and
        operated by Bitcipher Labs LLP, a limited liability partnership firm
        incorporated in India (“We”, “Us”, “Company” or “Our”, which expression
        shall mean and include its affiliates, successors and assigns).
        <br />
        <br />
        THIS POLICY DESCRIBES OUR POLICIES AND PROCEDURES FOR COLLECTION, USE,
        PROCESSING, STORAGE, DISCLOSURE AND PROTECTION OF YOUR PERSONAL DATA AND
        INFORMATION, INCLUDING, BUT NOT LIMITED TO, BUSINESS, FINANCIAL, OR
        OTHER SENSITIVE PERSONAL DATA AND INFORMATION (INDIVIDUALLY AND
        COLLECTIVELY REFERRED TO AS <b>'PERSONAL INFORMATION'</b>).
        <br />
        <br />
        THIS POLICY CONSTITUTES A LEGAL AGREEMENT BETWEEN YOU, AS THE USER OF
        THE PLATFORM, AND US, AS THE OWNER AND OPERATOR OF THE PLATFORM. BY
        REGISTERING YOUR USER’S PLATFORM ACCOUNT WITH US OR BY OTHERWISE
        VISITING / ACCESSING THE PLATFORM, YOU ARE HEREBY PROVIDING US YOUR
        EXPRESS CONSENT TO VOLUNTARILY PROVIDING US AND ALLOWING US TO USE,
        COLLECT, ACCESS, PROCESS, STORE, DISCLOSE AND PROTECT THE PERSONAL
        INFORMATION IN ACCORDANCE WITH THIS POLICY. THIS POLICY DOES NOT APPLY
        TO THIRD-PARTY PLATFORMS (WHICH MAY HAVE THEIR OWN PRIVACY POLICY OR
        PRIVACY NOTICE) THAT ARE CONNECTED VIA LINKS TO THE PLATFORM.
        <br />
        <br />
        IF YOU DO NOT AGREE WITH THIS POLICY, PLEASE DO NOT PROCEED FURTHER TO
        USE/ ACCESS THIS PLATFORM. ALSO, IN THE ABSENCE OF AN ACCEPTANCE OF THE
        POLICY BY YOU, WE WILL NOT BE ABLE TO PROVIDE THE SERVICES TO YOU.
        FURTHER, YOU WILL HAVE THE OPTION TO NOT PROVIDE YOUR CONSENT, OR
        WITHDRAW ANY CONSENT GIVEN EARLIER, PROVIDED THAT THE DECISION TO NOT
        PROVIDE CONSENT / WITHDRAWAL OF THE CONSENT IS INTIMATED TO US IN
        WRITING. IF YOU DO NOT PROVIDE US PERSONAL INFORMATION OR WITHDRAW THE
        CONSENT TO PROVIDE US WITH ANY OF YOUR PERSONAL INFORMATION AT ANY POINT
        IN TIME, WE SHALL HAVE THE OPTION NOT TO PROVIDE THE BENEFITS OR
        SERVICES FOR THE PURPOSE OF WHICH THE SAID PERSONAL INFORMATION WAS
        SOUGHT.
        <br />
        <br />
        YOUR USE OF THE PLATFORM WILL BE GOVERNED BY THIS POLICY IN ADDITION TO
        THE TERMS OF USE AS APPLICABLE TO YOU.
        <br />
        <br />
        THIS POLICY IS IN ACCORDANCE WITH THE INFORMATION TECHNOLOGY ACT, 2000
        AND THE RELEVANT RULES MADE THEREUNDER.
        <br />
        <br />
        <ol>
          <li>
            <b>Personal Information:</b>
          </li>
          <span>
            “Personal Information” includes without limitation the following:
          </span>

          <ul style={{ listStyle: "disc inside" }}>
            <li>
              Information that You provide to Us by filling in forms on the
              Platform. This may include contact information such as name, email
              address, mailing address, phone number, pin code;
            </li>
            <li>
              Information that You voluntarily provide when You write directly
              to Us (including by e-mail and surveys);
            </li>
            <li>
              Know Your Customer (“KYC”) related information and documents and
              data that You provide to Us.
            </li>
            <li>
              Information that You specifically provide access to while
              accepting the Terms and Conditions of use of the Platform.
            </li>
            <li>
              Financial account information such as details of the accounts from
              and to which you make fiat currency transactions.
            </li>
            <li>Your Platforms’ wallet related data and information.</li>
            <li>
              Details of any activities undertaken and transactions carried out
              by You using the Platform.
            </li>
          </ul>
        </ol>
      </div>
    </>
  );
};
