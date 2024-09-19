drop database if exists learning_nlp;
create database learning_nlp;
use learning_nlp;

drop table if exists category;
drop table if exists author;
drop table if exists story;
drop table if exists app_user_role;
drop table if exists app_role;
drop table if exists app_user;

create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    enabled bit not null default(1)
);

create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table app_user_role (
    app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (app_user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (app_user_id)
        references app_user(app_user_id),
    constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
);

create table category (
	cat_id int auto_increment primary key,
    `type` varchar(20) not null
);

create table author (
	author_id int auto_increment primary key,
    `name` varchar(30) not null,
    `description` varchar(255)
);

create table story (
	story_id int auto_increment primary key,
    title varchar(255) not null,
    author_id int,
    `description` varchar(255),
    `text` LONGTEXT not null,
    publishedDate DATE, 
    cat_id int not null,
    
    constraint fk_author_id
    foreign key (author_id) references author(author_id)
    on delete cascade
    on update cascade, 
    
    constraint fk_cat_id
    foreign key (cat_id) references category(cat_id)
    on delete cascade
    on update cascade
);

insert into author (`name`) values
	('George Orwell'),
    ('The Founding Fathers'),
    ('Hans Christian Andersen');

insert into category (`type`) values
	('DOCUMENT'),
    ('SHORT_STORY');

insert into story (title, author_id, `text`, cat_id) values
	('Steelheart', 1, 'This was a book about steel, and his name was heart', 1),
    ('Declaration of Independence', 2, 
    "In Congress, July 4, 1776

The unanimous Declaration of the thirteen united States of America, When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.

We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.

He has refused his Assent to Laws, the most wholesome and necessary for the public good.

He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them.

He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only.

He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures.

He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people.

He has refused for a long time, after such dissolutions, to cause others to be elected; whereby the Legislative powers, incapable of Annihilation, have returned to the People at large for their exercise; the State remaining in the mean time exposed to all the dangers of invasion from without, and convulsions within.

He has endeavoured to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands.

He has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers.

He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries.

He has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance.

He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures.

He has affected to render the Military independent of and superior to the Civil power.

He has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation:

For Quartering large bodies of armed troops among us:

For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States:

For cutting off our Trade with all parts of the world:

For imposing Taxes on us without our Consent:

For depriving us in many cases, of the benefits of Trial by Jury:

For transporting us beyond Seas to be tried for pretended offences:

For abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies:

For taking away our Charters, abolishing our most valuable Laws, and altering fundamentally the Forms of our Governments:

For suspending our own Legislatures, and declaring themselves invested with power to legislate for us in all cases whatsoever.

He has abdicated Government here, by declaring us out of his Protection and waging War against us.

He has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people.

He is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation and tyranny, already begun with circumstances of Cruelty & perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation.

He has constrained our fellow Citizens taken Captive on the high Seas to bear Arms against their Country, to become the executioners of their friends and Brethren, or to fall themselves by their Hands.

He has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions.

In every stage of these Oppressions We have Petitioned for Redress in the most humble terms: Our repeated Petitions have been answered only by repeated injury. A Prince whose character is thus marked by every act which may define a Tyrant, is unfit to be the ruler of a free people.

Nor have We been wanting in attentions to our Brittish brethren. We have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us. We have reminded them of the circumstances of our emigration and settlement here. We have appealed to their native justice and magnanimity, and we have conjured them by the ties of our common kindred to disavow these usurpations, which, would inevitably interrupt our connections and correspondence. They too have been deaf to the voice of justice and of consanguinity. We must, therefore, acquiesce in the necessity, which denounces our Separation, and hold them, as we hold the rest of mankind, Enemies in War, in Peace Friends.

We, therefore, the Representatives of the united States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved; and that as Free and Independent States, they have full Power to levy War, conclude Peace, contract Alliances, establish Commerce, and to do all other Acts and Things which Independent States may of right do. And for the support of this Declaration, with a firm reliance on the protection of divine Providence, we mutually pledge to each other our Lives, our Fortunes and our sacred Honor.
"
    , 1),
    ('The Ugly Duckling', 3, 'It was so beautiful out on the country, it was summer- the wheat fields were golden, the oats were green, and down among the green meadows the hay was stacked. There the stork minced about on his red legs, clacking away in Egyptian, which was the language his mother had taught him. Round about the field and meadow lands rose vast forests, in which deep lakes lay hidden. Yes, it was indeed lovely out there in the country.

In the midst of the sunshine there stood an old manor house that had a deep moat around it. From the walls of the manor right down to the water''s edge great burdock leaves grew, and there were some so tall that little children could stand upright beneath the biggest of them. In this wilderness of leaves, which was as dense as the forests itself, a duck sat on her nest, hatching her ducklings. She was becoming somewhat weary, because sitting is such a dull business and scarcely anyone came to see her. The other ducks would much rather swim in the moat than waddle out and squat under the burdock leaf to gossip with her.

But at last the eggshells began to crack, one after another. "Peep, peep!" said the little things, as they came to life and poked out their heads.

"Quack, quack!" said the duck, and quick as quick can be they all waddled out to have a look at the green world under the leaves. Their mother let them look as much as they pleased, because green is good for the eyes.

"How wide the world is," said all the young ducks, for they certainly had much more room now than they had when they were in their eggshells.

"Do you think this is the whole world?" their mother asked. "Why it extends on and on, clear across to the other side of the garden and right on into the parson''s field, though that is further than I have ever been. I do hope you are all hatched," she said as she got up. "No, not quite all. The biggest egg still lies here. How much longer is this going to take? I am really rather tired of it all," she said, but she settled back on her nest.

"Well, how goes it?" asked an old duck who came to pay her a call.

"It takes a long time with that one egg," said the duck on the nest. "It won''t crack, but look at the others. They are the cutest little ducklings I''ve ever seen. They look exactly like their father, the wretch! He hasn''t come to see me at all."

"Let''s have a look at the egg that won''t crack," the old duck said. "It''s a turkey egg, and you can take my word for it. I was fooled like that once myself. What trouble and care I had with those turkey children, for I may as well tell you, they are afraid of the water. I simply could not get them into it. I quacked and snapped at them, but it wasn''t a bit of use. Let me see the egg. Certainly, it''s a turkey egg. Let it lie, and go teach your other children to swim."

"Oh, I''ll sit a little longer. I''ve been at it so long already that I may as well sit here half the summer."

"Suit yourself," said the old duck, and away she waddled.

At last the big egg did crack. "Peep," said the young one, and out he tumbled, but he was so big and ugly.

The duck took a look at him. "That''s a frightfully big duckling," she said. "He doesn''t look the least like the others. Can he really be a turkey baby? Well, well! I''ll soon find out. Into the water he shall go, even if I have to shove him in myself."

Next day the weather was perfectly splendid, and the sun shone down on all the green burdock leaves. The mother duck led her whole family down to the moat. Splash! she took to the water. "Quack, quack," said she, and one duckling after another plunged in. The water went over their heads, but they came up in a flash, and floated to perfection. Their legs worked automatically, and they were all there in the water. Even the big, ugly gray one was swimming along.

"Why, that''s no turkey," she said. "See how nicely he uses his legs, and how straight he holds himself. He''s my very own son after all, and quite good-looking if you look at him properly. Quack, quack come with me. I''ll lead you out into the world and introduce you to the duck yard. But keep close to me so that you won''t get stepped on, and watch out for the cat!"

Thus they sallied into the duck yard, where all was in an uproar because two families were fighting over the head of an eel. But the cat got it, after all.

"You see, that''s the way of the world." The mother duck licked her bill because she wanted the eel''s head for herself. "Stir your legs. Bustle about, and mind that you bend your necks to that old duck over there. She''s the noblest of us all, and has Spanish blood in her. That''s why she''s so fat. See that red rag around her leg? That''s a wonderful thing, and the highest distinction a duck can get. It shows that they don''t want to lose her, and that she''s to have special attention from man and beast. Shake yourselves! Don''t turn your toes in. A well-bred duckling turns his toes way out, just as his father and mother do-this way. So then! Now duck your necks and say quack!"

They did as she told them, but the other ducks around them looked on and said right out loud, "See here! Must we have this brood too, just as if there weren''t enough of us already? And-fie! what an ugly-looking fellow that duckling is! We won''t stand for him." One duck charged up and bit his neck.

"Let him alone," his mother said. "He isn''t doing any harm."

"Possibly not," said the duck who bit him, "but he''s too big and strange, and therefore he needs a good whacking."

"What nice-looking children you have, Mother," said the old duck with the rag around her leg. "They are all pretty except that one. He didn''t come out so well. It''s a pity you can''t hatch him again."

"That can''t be managed, your ladyship," said the mother. "He isn''t so handsome, but he''s as good as can be, and he swims just as well as the rest, or, I should say, even a little better than they do. I hope his looks will improve with age, and after a while he won''t seem so big. He took too long in the egg, and that''s why his figure isn''t all that it should be." She pinched his neck and preened his feathers. "Moreover, he''s a drake, so it won''t matter so much. I think he will be quite strong, and I''m sure he will amount to something."

"The other ducklings are pretty enough," said the old duck. "Now make yourselves right at home, and if you find an eel''s head you may bring it to me."

So they felt quite at home. But the poor duckling who had been the last one out of his egg, and who looked so ugly, was pecked and pushed about and made fun of by the ducks, and the chickens as well. "He''s too big," said they all. The turkey gobbler, who thought himself an emperor because he was born wearing spurs, puffed up like a ship under full sail and bore down upon him, gobbling and gobbling until he was red in the face. The poor duckling did not know where he dared stand or where he dared walk. He was so sad because he was so desperately ugly, and because he was the laughing stock of the whole barnyard.

So it went on the first day, and after that things went from bad to worse. The poor duckling was chased and buffeted about by everyone. Even his own brothers and sisters abused him. "Oh," they would always say, "how we wish the cat would catch you, you ugly thing." And his mother said, "How I do wish you were miles away." The ducks nipped him, and the hens pecked him, and the girl who fed them kicked him with her foot.

So he ran away; and he flew over the fence. The little birds in the bushes darted up in a fright. "That''s because I''m so ugly," he thought, and closed his eyes, but he ran on just the same until he reached the great marsh where the wild ducks lived. There he lay all night long, weary and disheartened.

When morning came, the wild ducks flew up to have a look at their new companion. "What sort of creature are you?" they asked, as the duckling turned in all directions, bowing his best to them all. "You are terribly ugly," they told him, "but that''s nothing to us so long as you don''t marry into our family."

Poor duckling! Marriage certainly had never entered his mind. All he wanted was for them to let him lie among the reeds and drink a little water from the marsh.

There he stayed for two whole days. Then he met two wild geese, or rather wild ganders-for they were males. They had not been out of the shell very long, and that''s what made them so sure of themselves.

"Say there, comrade," they said, "you''re so ugly that we have taken a fancy to you. Come with us and be a bird of passage. In another marsh near-by, there are some fetching wild geese, all nice young ladies who know how to quack. You are so ugly that you''ll completely turn their heads."

Bing! Bang! Shots rang in the air, and these two ganders fell dead among the reeds. The water was red with their blood. Bing! Bang! the shots rang, and as whole flocks of wild geese flew up from the reeds another volley crashed. A great hunt was in progress. The hunters lay under cover all around the marsh, and some even perched on branches of trees that overhung the reeds. Blue smoke rose like clouds from the shade of the trees, and drifted far out over the water.

The bird dogs came splash, splash! through the swamp, bending down the reeds and the rushes on every side. This gave the poor duckling such a fright that he twisted his head about to hide it under his wing. But at that very moment a fearfully big dog appeared right beside him. His tongue lolled out of his mouth and his wicked eyes glared horribly. He opened his wide jaws, flashed his sharp teeth, and - splash, splash - on he went without touching the duckling.

"Thank heavens," he sighed, "I''m so ugly that the dog won''t even bother to bite me."

He lay perfectly still, while the bullets splattered through the reeds as shot after shot was fired. It was late in the day before things became quiet again, and even then the poor duckling didn''t dare move. He waited several hours before he ventured to look about him, and then he scurried away from that marsh as fast as he could go. He ran across field and meadows. The wind was so strong that he had to struggle to keep his feet.

Late in the evening he came to a miserable little hovel, so ramshackle that it did not know which way to tumble, and that was the only reason it still stood. The wind struck the duckling so hard that the poor little fellow had to sit down on his tail to withstand it. The storm blew stronger and stronger, but the duckling noticed that one hinge had come loose and the door hung so crooked that he could squeeze through the crack into the room, and that''s just what he did.

Here lived an old woman with her cat and her hen. The cat, whom she called "Sonny," could arch his back, purr, and even make sparks, though for that you had to stroke his fur the wrong way. The hen had short little legs, so she was called "Chickey Shortleg." She laid good eggs, and the old woman loved her as if she had been her own child.

In the morning they were quick to notice the strange duckling. The cat began to purr, and the hen began to cluck.

"What on earth!" The old woman looked around, but she was short-sighted, and she mistook the duckling for a fat duck that had lost its way. "That was a good catch," she said. "Now I shall have duck eggs-unless it''s a drake. We must try it out." So the duckling was tried out for three weeks, but not one egg did he lay.

In this house the cat was master and the hen was mistress. They always said, "We and the world," for they thought themselves half of the world, and much the better half at that. The duckling thought that there might be more than one way of thinking, but the hen would not hear of it.

"Can you lay eggs?" she asked

"No."

"Then be so good as to hold your tongue."

The cat asked, "Can you arch your back, purr, or make sparks?"

"No."

"Then keep your opinion to yourself when sensible people are talking."

The duckling sat in a corner, feeling most despondent. Then he remembered the fresh air and the sunlight. Such a desire to go swimming on the water possessed him that he could not help telling the hen about it.

"What on earth has come over you?" the hen cried. "You haven''t a thing to do, and that''s why you get such silly notions. Lay us an egg, or learn to purr, and you''ll get over it."

"But it''s so refreshing to float on the water," said the duckling, "so refreshing to feel it rise over your head as you dive to the bottom."

"Yes, it must be a great pleasure!" said the hen. "I think you must have gone crazy. Ask the cat, who''s the wisest fellow I know, whether he likes to swim or dive down in the water. Of myself I say nothing. But ask the old woman, our mistress. There''s no one on earth wiser than she is. Do you imagine she wants to go swimming and feel the water rise over her head?"

"You don''t understand me," said the duckling.

"Well, if we don''t, who would? Surely you don''t think you are cleverer than the cat and the old woman-to say nothing of myself. Don''t be so conceited, child. Just thank your Maker for all the kindness we have shown you. Didn''t you get into this snug room, and fall in with people who can tell you what''s what? But you are such a numbskull that it''s no pleasure to have you around. Believe me, I tell you this for your own good. I say unpleasant truths, but that''s the only way you can know who are your friends. Be sure now that you lay some eggs. See to it that you learn to purr or to make sparks."

"I think I''d better go out into the wide world," said the duckling.

"Suit yourself," said the hen.

So off went the duckling. He swam on the water, and dived down in it, but still he was slighted by every living creature because of his ugliness.

Autumn came on. The leaves in the forest turned yellow and brown. The wind took them and whirled them about. The heavens looked cold as the low clouds hung heavy with snow and hail. Perched on the fence, the raven screamed, "Caw, caw!" and trembled with cold. It made one shiver to think of it. Pity the poor little duckling!

One evening, just as the sun was setting in splendor, a great flock of large, handsome birds appeared out of the reeds. The duckling had never seen birds so beautiful. They were dazzling white, with long graceful necks. They were swans. They uttered a very strange cry as they unfurled their magnificent wings to fly from this cold land, away to warmer countries and to open waters. They went up so high, so very high, that the ugly little duckling felt a strange uneasiness come over him as he watched them. He went around and round in the water, like a wheel. He craned his neck to follow their course, and gave a cry so shrill and strange that he frightened himself. Oh! He could not forget them-those splendid, happy birds. When he could no longer see them he dived to the very bottom. and when he came up again he was quite beside himself. He did not know what birds they were or whither they were bound, yet he loved them more than anything he had ever loved before. It was not that he envied them, for how could he ever dare dream of wanting their marvelous beauty for himself? He would have been grateful if only the ducks would have tolerated him-the poor ugly creature.

The winter grew cold - so bitterly cold that the duckling had to swim to and fro in the water to keep it from freezing over. But every night the hole in which he swam kept getting smaller and smaller. Then it froze so hard that the duckling had to paddle continuously to keep the crackling ice from closing in upon him. At last, too tired to move, he was frozen fast in the ice.

Early that morning a farmer came by, and when he saw how things were he went out on the pond, broke away the ice with his wooden shoe, and carried the duckling home to his wife. There the duckling revived, but when the children wished to play with him he thought they meant to hurt him. Terrified, he fluttered into the milk pail, splashing the whole room with milk. The woman shrieked and threw up her hands as he flew into the butter tub, and then in and out of the meal barrel. Imagine what he looked like now! The woman screamed and lashed out at him with the fire tongs. The children tumbled over each other as they tried to catch him, and they laughed and they shouted. Luckily the door was open, and the duckling escaped through it into the bushes, where he lay down, in the newly fallen snow, as if in a daze.

But it would be too sad to tell of all the hardships and wretchedness he had to endure during this cruel winter. When the warm sun shone once more, the duckling was still alive among the reeds of the marsh. The larks began to sing again. It was beautiful springtime.

Then, quite suddenly, he lifted his wings. They swept through the air much more strongly than before, and their powerful strokes carried him far. Before he quite knew what was happening, he found himself in a great garden where apple trees bloomed. The lilacs filled the air with sweet scent and hung in clusters from long, green branches that bent over a winding stream. Oh, but it was lovely here in the freshness of spring!

From the thicket before him came three lovely white swans. They ruffled their feathers and swam lightly in the stream. The duckling recognized these noble creatures, and a strange feeling of sadness came upon him.

"I shall fly near these royal birds, and they will peck me to bits because I, who am so very ugly, dare to go near them. But I don''t care. Better be killed by them than to be nipped by the ducks, pecked by the hens, kicked about by the hen-yard girl, or suffer such misery in winter."

So he flew into the water and swam toward the splendid swans. They saw him, and swept down upon him with their rustling feathers raised. "Kill me!" said the poor creature, and he bowed his head down over the water to wait for death. But what did he see there, mirrored in the clear stream? He beheld his own image, and it was no longer the reflection of a clumsy, dirty, gray bird, ugly and offensive. He himself was a swan! Being born in a duck yard does not matter, if only you are hatched from a swan''s egg.

He felt quite glad that he had come through so much trouble and misfortune, for now he had a fuller understanding of his own good fortune, and of beauty when he met with it. The great swans swam all around him and stroked him with their bills.

Several little children came into the garden to throw grain and bits of bread upon the water. The smallest child cried, "Here''s a new one," and the others rejoiced, "yes, a new one has come." They clapped their hands, danced around, and ran to bring their father and mother.

And they threw bread and cake upon the water, while they all agreed, "The new one is the most handsome of all. He''s so young and so good-looking." The old swans bowed in his honor.

Then he felt very bashful, and tucked his head under his wing. He did not know what this was all about. He felt so very happy, but he wasn''t at all proud, for a good heart never grows proud. He thought about how he had been persecuted and scorned, and now he heard them all call him the most beautiful of all beautiful birds. The lilacs dipped their clusters into the stream before him, and the sun shone so warm and so heartening. He rustled his feathers and held his slender neck high, as he cried out with full heart: "I never dreamed there could be so much happiness, when I was the ugly duckling."

', 2);

insert into app_role (`name`) values
    ('USER'),
    ('ADMIN');

-- passwords are set to "P@ssw0rd!"
insert into app_user (username, password_hash, enabled)
    values
    ('john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
    ('sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);

insert into app_user_role
    values
    (1, 2),
    (2, 1);