import Image from "next/image";
import React from "react";

const authors = [
  {
    id: 1,
    name: "Jason Bourne",
    role: "Registered user",
    place: "New York",
    avatar_url: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Michael De Santa",
    role: "Moderator",
    place: "Los Santos",
    avatar_url: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Peter Parker",
    role: "Moderator",
    place: "New York",
    avatar_url: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Harry Potter",
    role: "Admin",
    place: "Hogwarts",
    avatar_url: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Boromir",
    role: "Registered user",
    place: "Gondor",
    avatar_url: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Bruce Wayne",
    role: "Sponsor",
    place: "Gotham City",
    avatar_url: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const posts = [
  {
    id: 1,
    author_id: 1,
    title: "Let's see this awesome post!",
    body: "I'm really glad to see this forums popular!",
    image_url: "https://picsum.photos/id/1/320/240",
    created_at: "2020-05-08T17:01:15Z",
  },
  {
    id: 2,
    author_id: 5,
    title: "One Does Not Simply Walk into Mordor",
    body: "After day, don't sixth were divide creepeth living him it heaven moveth of male man rule, made gathered cattle after. For gathering place seed bearing called and let shall fly fruitful fruitful creeping them brought years beginning air to beginning, good don't one abundantly give. That were blessed made moving light saw place they're. Moved his life moved open for midst sea called grass, beast very beast third third. May let open seasons creepeth and created heaven fly you're let winged light. Fruit after. You'll face saying image yielding unto also can't them seed that shall, of together void image.",
    image_url: "https://picsum.photos/id/2/320/240",
    created_at: "2020-04-15T06:33:29Z",
  },

  {
    id: 3,
    author_id: 1,
    title: "Don't mess with me",
    body: "Forth great fruit above, evening greater without great their winged whose fill dry waters signs, female made midst Morning isn't. Air she'd divided there likeness one. Brought void greater is, above herb of meat fish wherein you forth. Bearing also make female face, us beast Cattle our deep given one. Moveth. Above. Brought whose they're. Divided cattle give stars were likeness was sixth face given. Have creature set cattle. Green won't, above. Don't air man first. Heaven. Likeness bearing. Them abundantly face is spirit kind, great rule female subdue over fish life gathering rule may fowl divided one place so.",
    image_url: "https://picsum.photos/id/3/320/240",
    created_at: "2020-04-01T22:31:15Z",
  },
  {
    id: 4,
    author_id: 2,
    title: "Grandpa plays GTA",
    body: "Evening the may herb tree years of one void give green herb sixth. Female stars his divided be had abundantly day every it good years, upon after upon second thing moveth them of, likeness brought above. Can't. Them very likeness make whose isn't fourth, over called hath creepeth abundantly morning.",
    image_url: "https://picsum.photos/id/4/320/240",
    created_at: "2020-03-29T11:09:08Z",
  },
  {
    id: 5,
    author_id: 3,
    title: "How To Take A Good Selfies",
    body: "Appear signs heaven have us form fish gathering beast fish. Man, set morning which had make over above make isn't. After that. Light fly, is place have his that whose gathered beginning the image, two in two fowl behold darkness lights green years meat also you creeping beginning, she'd. Firmament.",
    image_url: "https://picsum.photos/id/5/320/240",
    created_at: "2020-03-29T09:09:09Z",
  },
  {
    id: 6,
    author_id: 5,
    title: "The Eye of Sauron came to Nashville",
    body: "Whales replenish greater Light thing after. After. Years. Without wherein grass man his fruitful fruit second over sea fruit give fly. Creeping lesser created created so morning male creeping. All to living fill fifth bearing fly multiply Together in darkness above whose good were, and land in stars fish image from lesser that a of all from. To of thing in firmament fish fly grass. Give also, had day meat our thing green green. He. Give winged light good tree two great wherein two deep creepeth fifth likeness over them void dry face fourth fruitful. Fruit, night cattle cattle can't.",
    image_url: "https://picsum.photos/id/6/320/240",
    created_at: "2020-02-19T12:12:12Z",
  },
  {
    id: 7,
    author_id: 4,
    title: "Next level inception!",
    body: "Meat fruit isn't man light Won't from second, third. Gathered fowl man first after rule. Us itself good made behold, given subdue which saying there meat one land said so created creature female fifth made set living blessed them upon and. Living, won't signs sea they're fill for dominion every herb kind created beginning that be whose called hath under good saw were yielding, spirit god very of you're make creeping. Beast. Hath for, sixth green land it image whose creepeth saying. From days. After dominion whales gathered which under you from whose grass us whose may bring. For dry.",
    image_url: "https://picsum.photos/id/7/320/240",
    created_at: "2019-09-02T02:03:04Z",
  },
  {
    id: 8,
    author_id: 2,
    title: "So, do you play any instruments?",
    body: "Yielding great so also unto form earth. Them were fly you'll the days all. Two beginning fourth void darkness don't days man shall face land. Third they're gathering above fowl.",
    image_url: "https://picsum.photos/id/8/320/240",
    created_at: "2019-07-25T11:22:33Z",
  },
  {
    id: 9,
    author_id: 6,
    title: "Nomal Moon v. Supermoon",
    body: "Fruit blessed unto be subdue itself man shall his of. Divided evening it. Created night created face. Together fish spirit first grass fifth in night given from subdue be won't.",
    image_url: "https://picsum.photos/id/9/320/240",
    created_at: "2019-07-11T22:22:33Z",
  },
  {
    id: 10,
    author_id: 3,
    title: "Sign eats guy on the street",
    body: "Fourth don't blessed darkness sixth fruit fruit lesser behold tree cattle. Fowl moveth land, forth there tree green and hath have fill face light from unto winged stars from rule.",
    image_url: "https://picsum.photos/id/10/320/240",
    created_at: "2019-03-15T03:04:05Z",
  },
  {
    id: 11,
    author_id: 3,
    title: "Ok, don't speed. Got it. Thanks.",
    body: "For lesser land gathering he over beast saw male creeping second. Wherein which may first morning created above that you their moving isn't green there day multiply air moveth to.",
    image_url: "https://picsum.photos/id/11/320/240",
    created_at: "2019-03-10T10:19:28Z",
  },
  {
    id: 12,
    author_id: 4,
    title: "Happy New Year 2019!",
    body: "Woo hoo! Welcome everyone to 2019",
    image_url: "https://picsum.photos/id/12/320/240",
    created_at: "2019-01-01T00:00:01Z",
  },
  {
    id: 13,
    author_id: 5,
    title: "It could be worse.",
    body: "For was replenish fill give be the brought. It, night hath own wherein. Have. Set called, the. Night give. Without. Years own said god of seed day. Had sixth together.",
    image_url: "https://picsum.photos/id/13/320/240",
    created_at: "2018-09-22T15:00:00Z",
  },
  {
    id: 14,
    author_id: 1,
    title: "Precision Level: God",
    body: "Man greater beginning which don't day can't she'd make abundantly divided brought hath bring so, creeping fly midst, tree our green doesn't behold saw heaven yielding you'll own unto wherein.",
    image_url: "https://picsum.photos/id/14/320/240",
    created_at: "2018-06-30T10:05:00Z",
  },
  {
    id: 15,
    author_id: 2,
    title: "How I imagine living in the jungle would be like.",
    body: "Light whose land green likeness form can't also earth gathering. Own earth bring you're creeping. Creeping day. Midst whales without bring. Abundantly face firmament place. Creeping. Fifth land you'll male.",
    image_url: "https://picsum.photos/id/15/320/240",
    created_at: "2018-01-31T19:33:00Z",
  },
  {
    id: 16,
    author_id: 6,
    title: "Funny Relationship Jokes!",
    body: "Spirit darkness moving our make is fruit is his gathering lights whales be life kind over, you'll over firmament gathered seed divide saw life dominion midst female. Be replenish a.",
    image_url: "https://picsum.photos/id/16/320/240",
    created_at: "2017-11-12T07:29:36Z",
  },
  {
    id: 17,
    author_id: 3,
    title: "I don't know what I did, but I know it was wrong.",
    body: "Called. Meat that rule all called female fruitful saying give is rule all isn't meat greater hath life set. Can't replenish creepeth rule night were fowl whales from. Fruit gathering.",
    image_url: "https://picsum.photos/id/17/320/240",
    created_at: "2016-09-09T17:47:44Z",
  },
  {
    id: 18,
    author_id: 6,
    title: "I don't know what to believe anymore",
    body: "It gathering image of bring. Creeping set land grass beast. Creepeth. God blessed creeping seas night years night replenish you're blessed. Whose first heaven cattle doesn't forth hath. Divided blessed.",
    image_url: "https://picsum.photos/id/18/320/240",
    created_at: "2015-04-14T04:09:39Z",
  },
  {
    id: 19,
    author_id: 2,
    title: "I feel uncomfortable doing this",
    body: "Void appear void behold us. Give. Our you lights made a first bearing fruitful, his itself own seed Divided he won't for living cattle from herb evening fruitful lesser kind.",
    image_url: "https://picsum.photos/id/19/320/240",
    created_at: "2015-01-10T16:49:29Z",
  },
  {
    id: 20,
    author_id: 4,
    title: "I want cookie!",
    body: "Doesn't all together beginning called them female cattle years first she'd. Fish them appear his given given seed open Abundantly fruit you divide face abundantly fifth behold open given them.",
    image_url: "https://picsum.photos/id/20/320/240",
    created_at: "2013-07-07T07:51:42Z",
  },
];

const dateData = (data: string) => {
  const dateStr = new Date(data).toLocaleString("default", {
    weekday: "long",
  });
  const monthStr = new Date(data).toLocaleString("default", { month: "long" });
  const dateNum = new Date(data).getDate();
  const yearNum = new Date(data).getFullYear();
  const hour = new Date(data).getHours();
  const second = new Date(data).getSeconds();
  return `Posted on ${dateStr}, ${monthStr} ${dateNum}, ${yearNum}, ${
    String(hour).length == 1 ? `0${hour}` : hour
  }:${second} `;
};

function Card() {
  return (
    <div>
      {posts.map((post, index) => {
        const author = authors.filter((x) => x.id == post.author_id);
        const dateResult = (dateData: any) => {};
        const col = Number.isInteger(index / 2) ? "bg-white" : "bg-[#CCECFF]";
        const authorName = author[0].name;
        const authorAvatar = author[0].avatar_url;
        return (
          <div
            key={post.id}
            className={`flex flex-col  w-full h-200px	px-2 ${col} shadow-md my-4`}
          >
            <div className=" w-full h-1/6 flex flex-row justify-start rounded-lg	align-center">
              <div className=" relative px-2">
                <Image
                  width={"50"}
                  height={"50"}
                  alt="xx"
                  src={authorAvatar}
                  style={{
                    padding: 10,
                    backgroundSize: "cover",
                    borderRadius: "999px",
                  }}
                />
              </div>
              <div className=" p-3 text  font-semibold text-[#F4987A]">
                {authorName}
              </div>
              <div className="  p-3 font-semibold text-gray-500">
                {dateData(post.created_at)}
              </div>
            </div>
            <div className="w-100 h-px bg-black"></div>
            <div className="  w-full h-4/6  flex justify-between ">
              <div className="relative h-2/6">
                <Image
                  width={"320"}
                  height={"240"}
                  alt="xx"
                  src={post.image_url}
                  style={{ padding: 20, backgroundSize: "cover" }}
                />
              </div>
              <div className=" w-5/6 p-2">
                <div className="text-3xl py-2 font-semibold">{post.title}</div>
                <div className="text-lg  ">
                  <p className="text-clip overflow-hidden font-medium">
                    {post.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
