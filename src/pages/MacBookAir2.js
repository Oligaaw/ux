import { useCallback } from "react";
import styled from "styled-components";

const MacbookAir2Child = styled.img`
  position: absolute;
  top: -100px;
  left: -300px;
  width: 915px;
  height: 960px;
`;
const MacbookAir2Item = styled.img`
  position: absolute;
  top: 648px;
  left: 822px;
  width: 915px;
  height: 960px;
`;
const MacbookAir2Inner = styled.img`
  position: absolute;
  top: 361px;
  left: 800px;
  border-radius: var(--br-mini);
  width: 480px;
  height: 263px;
  object-fit: cover;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 685px;
  left: 800px;
  border-radius: var(--br-mini);
  width: 480px;
  height: 263px;
  object-fit: cover;
`;
const HeaderChild = styled.div`
  position: absolute;
  display: flex;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  border-bottom: 4px solid var(--color-burlywood-100);
  box-sizing: border-box;
  width: 2000px;
  height: 218px;
  overflow: hidden;
`;
const HeaderItem = styled.img`
  position: absolute;
  top: 165px;
  left: 380px;
  width: 153px;
  height: 52px;
  mix-blend-mode: darken;
`;
const Information = styled.b`
  position: absolute;
  top: 175px;
  left: 400px;
  display: inline-block;
  color: var(--color-white);
  width: 218px;
  height: 33px;
`;
const Kursplan = styled.b`
  position: absolute;
  top: 175px;
  left: 750px;
  display: inline-block;
  width: 100px;
  height: 33px;
`;
const Recensioner = styled.b`
  position: absolute;
  top: 175px;
  left: 900px;
  display: inline-block;
  width: 122px;
  height: 21px;
`;
const Behrighet = styled.b`
  position: absolute;
  top: 175px;
  left: 600px;
  display: inline-block;
  width: 108px;
  height: 33px;
  cursor: pointer;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 20.8px;
  left: 22.2px;
  border-radius: 50%;
  background-color: var(--color-burlywood-100);
  width: 114.7px;
  height: 113.3px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 22.4px;
  left: 23.7px;
  border-radius: 50%;
  background-color: var(--color-white);
  width: 111.7px;
  height: 110.2px;
`;
const IconLaurelCrown = styled.img`
  position: absolute;
  height: 53.6%;
  width: 48.8%;
  top: 28.35%;
  right: 24.68%;
  bottom: 18.06%;
  left: 26.52%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const EmojiHerbIcon = styled.img`
  position: absolute;
  height: 43.38%;
  width: 45.38%;
  top: 56.62%;
  right: 27.59%;
  bottom: 0%;
  left: 27.03%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div = styled.div`
  position: absolute;
  top: 26px;
  left: 67px;
  font-size: 17px;
  font-family: var(--font-bowlby-one);
  color: var(--color-burlywood-100);
  display: inline-block;
  width: 34px;
  height: 19px;
`;
const F = styled.b`
  position: absolute;
  top: 105.5px;
  left: 5.3px;
  display: inline-block;
  width: 11.4px;
  height: 27.5px;
  transform: rotate(-107.56deg);
  transform-origin: 0 0;
`;
const R = styled.b`
  position: absolute;
  top: 82.5px;
  left: 0.2px;
  display: inline-block;
  width: 7.1px;
  height: 27.5px;
  transform: rotate(-91.22deg);
  transform-origin: 0 0;
`;
const O = styled.b`
  position: absolute;
  top: 63.3px;
  left: 1.2px;
  display: inline-block;
  width: 9.9px;
  height: 27.5px;
  transform: rotate(-75.57deg);
  transform-origin: 0 0;
`;
const N = styled.b`
  position: absolute;
  top: 42px;
  left: 8.6px;
  display: inline-block;
  width: 10px;
  height: 27.4px;
  transform: rotate(-58.61deg);
  transform-origin: 0 0;
`;
const T = styled.b`
  position: absolute;
  top: 24.3px;
  left: 21.5px;
  display: inline-block;
  width: 5.7px;
  height: 27.2px;
  transform: rotate(-43.92deg);
  transform-origin: 0 0;
`;
const E = styled.b`
  position: absolute;
  top: 13.1px;
  left: 35px;
  display: inline-block;
  width: 8.6px;
  height: 27.1px;
  transform: rotate(-30.08deg);
  transform-origin: 0 0;
`;
const N1 = styled.b`
  position: absolute;
  top: 3.9px;
  left: 54.1px;
  display: inline-block;
  width: 10.1px;
  height: 27px;
  transform: rotate(-14.31deg);
  transform-origin: 0 0;
`;
const D = styled.b`
  position: absolute;
  top: 0px;
  left: 76.8px;
  display: inline-block;
  width: 10.1px;
  height: 26.9px;
  transform: rotate(2.04deg);
  transform-origin: 0 0;
`;
const B = styled.b`
  position: absolute;
  top: 2.6px;
  left: 98.9px;
  display: inline-block;
  width: 5.8px;
  height: 27px;
  transform: rotate(16.36deg);
  transform-origin: 0 0;
`;
const S = styled.b`
  position: absolute;
  top: 8.7px;
  left: 115.4px;
  display: inline-block;
  width: 8.6px;
  height: 27.1px;
  transform: rotate(30.08deg);
  transform-origin: 0 0;
`;
const C = styled.b`
  position: absolute;
  top: 20.6px;
  left: 132.6px;
  display: inline-block;
  width: 8.6px;
  height: 27.2px;
  transform: rotate(45.31deg);
  transform-origin: 0 0;
`;
const H = styled.b`
  position: absolute;
  top: 36.6px;
  left: 146.2px;
  display: inline-block;
  width: 10px;
  height: 27.4px;
  transform: rotate(61.42deg);
  transform-origin: 0 0;
`;
const O1 = styled.b`
  position: absolute;
  top: 57.3px;
  left: 155.3px;
  display: inline-block;
  width: 9.9px;
  height: 27.5px;
  transform: rotate(78.41deg);
  transform-origin: 0 0;
`;
const O2 = styled.b`
  position: absolute;
  top: 79.6px;
  left: 158px;
  display: inline-block;
  width: 9.9px;
  height: 27.5px;
  transform: rotate(95.49deg);
  transform-origin: 0 0;
`;
const L = styled.b`
  position: absolute;
  top: 101px;
  left: 154.1px;
  display: inline-block;
  width: 5.7px;
  height: 27.5px;
  transform: rotate(110.4deg);
  transform-origin: 0 0;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 20px;
  left: 650px;
  width: 158px;
  height: 139px;
  font-size: var(--font-size-xs);
  color: var(--color-burlywood-200);
`;
const WeCreate = styled.div`
  position: absolute;
  top: 78px;
  left: 250px;
  font-size: var(--font-size-21xl);
  display: inline-block;
  width: 265px;
  height: 62px;
`;
const ProblemSolvers = styled.div`
  position: absolute;
  top: 75px;
  left: 950px;
  font-size: var(--font-size-21xl);
  display: inline-block;
  width: 415px;
  height: 66px;
`;
const Header = styled.div`
  position: absolute;
  // top: 0px;
  // left: 0px;
  // width: 100px;
  // height: 218px;
`;
const FooterChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkslategray);
  border-top: 4px solid #5f5445;
  box-sizing: border-box;
  width: 2000px;
  height: 180px;
  overflow: hidden;
`;
const OmFrontendSchool = styled.p`
  margin: 0;

`;
const OmFrontendSchoolContainer = styled.b`
  position: absolute;
  top: 43px;
  left: 250px;
  display: inline-block;
  width: 211px;
  height: 23px;
`;
const IconSocialLinkedin = styled.img`
  position: absolute;
  height: 11.38%;
  width: 1.56%;
  top: 40.51%;
  right: 15.55%;
  bottom: 48.11%;
  left: 1070px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Klagomlshantering = styled.b`
  position: absolute;
  top: 43px;
  left: 650px;
  display: inline-block;
  width: 206px;
  height: 24px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 11.1%;
  width: 1.56%;
  top: 40.51%;
  right: 19.38%;
  bottom: 48.39%;
  left: 1105px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 11.1%;
  width: 1.56%;
  top: 40.51%;
  right: 12.11%;
  bottom: 48.39%;
  left: 1140px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 11.1%;
  width: 1.56%;
  top: 40.51%;
  right: 23.2%;
  bottom: 48.39%;
  left: 80%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Feschoolgmailcom = styled.b`
  position: absolute;
  top: 109px;
  left: 1000px;
  font-size: 16px;
  display: inline-block;
  width: 176px;
  height: 24px;
`;
const OmOss = styled.b`
  position: absolute;
  top: 78px;
  left: 250px;
  display: inline-block;
  width: 74px;
  height: 25px;
`;
const VrtUtbildningskoncept = styled.b`
  position: absolute;
  top: 115px;
  left: 250px;
`;
const JobbaHosOss = styled.b`
  position: absolute;
  top: 79px;
  left: 650px;
`;
const Dataskydd = styled.b`
  position: absolute;
  top: 115px;
  left: 650px;
`;
const EmojiHerbIcon1 = styled.img`
  position: absolute;
  height: 28.91%;
  width: 5.32%;
  top: 66.04%;
  right: 94.29%;
  bottom: 5.05%;
  left: 0.39%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const EmojiHerbIcon2 = styled.img`
  position: absolute;
  height: 37.74%;
  width: 4.09%;
  top: 62.15%;
  right: 0.36%;
  bottom: 0.11%;
  left: 110.55%;
`;

const Footer = styled.div`
  position: absolute;
  top: 1087px;
  left: 0px;
  width: 1280px;
  height: 180.2px;
  color: var(--color-burlywood-200);
`;
const ContentChild = styled.div`
  position: absolute;
  top: 90px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid var(--color-burlywood-100);
  box-sizing: border-box;
  width: 470px;
  height: 672px;
`;
const Frontendutveckling = styled.b`
  position: absolute;
  top: 0px;
  left: 69px;
  font-size: 36px;
  display: inline-block;
  color: var(--color-burlywood-100);
  width: 339px;
  height: 49px;
`;
const Information1 = styled.b`
  position: absolute;
  top: 112px;
  left: 32px;
  font-size: 25px;
  display: inline-block;
  color: var(--color-burlywood-100);
  width: 270px;
  height: 76px;
`;
const SomFrontendutvecklareSkaparContainer = styled.div`
  position: absolute;
  top: 148px;
  left: 31px;
  display: inline-block;
  width: 416px;
  height: 456px;
`;
const SprkkunskaperSomProgrammet = styled.div`
  position: absolute;
  top: 677px;
  left: 32px;
  display: inline-block;
  width: 315px;
  height: 23px;
`;
const IconJavascriptJs = styled.img`
  position: absolute;
  height: 3.94%;
  width: 6.38%;
  top: 92.52%;
  right: 53.62%;
  bottom: 3.54%;
  left: 40%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IconFileTypeCss = styled.img`
  position: absolute;
  height: 3.94%;
  width: 5.64%;
  top: 92.52%;
  right: 70.53%;
  bottom: 3.54%;
  left: 23.83%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IconFileTypeHtml = styled.img`
  position: absolute;
  height: 3.94%;
  width: 5.64%;
  top: 92.52%;
  right: 86.7%;
  bottom: 3.54%;
  left: 7.66%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IconReact = styled.img`
  position: absolute;
  height: 3.94%;
  width: 7.17%;
  top: 92.52%;
  right: 36.66%;
  bottom: 3.54%;
  left: 56.17%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const R400Container = styled.div`
  position: absolute;
  top: 54px;
  left: 19px;
  display: inline-block;
  width: 431px;
  height: 44px;
`;
const Content = styled.div`
  position: absolute;
  top: 271px;
  left: 200px;
  width: 470px;
  height: 762px;
  font-size: var(--font-size-mini);
  color: var(--color-white);
`;
const MacbookAir2Root = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 1267px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-burlywood-100);
  font-family: var(--font-bona-nova);
`;

const MacBookAir2 = () => {
  const onBehrighetTextClick = useCallback(() => {
    // Please sync "MacBook Air - 3" to the project
  }, []);

  return (
    <MacbookAir2Root>
      <MacbookAir2Child alt="" src="/ellipse-4.svg" />
      <MacbookAir2Item alt="" src="/ellipse-3.svg" />
      <MacbookAir2Inner alt="" src="/rectangle-2@2x.png" />
      <RectangleIcon alt="" src="/rectangle-3@2x.png" />
      <Header>
        <HeaderChild />
        <HeaderItem alt="" src="/rectangle-5.svg" />
        <Information>Information</Information>
        <Kursplan>Kursplan</Kursplan>
        <Recensioner>Recensioner</Recensioner>
        <Behrighet onClick={onBehrighetTextClick}>Behörighet</Behrighet>
        <EllipseParent>
          <GroupChild />
          <GroupItem />
          <IconLaurelCrown alt="" src="/vector3.svg" />
          <EmojiHerbIcon alt="" src="/-emoji-herb.svg" />
          <Div>{`</>`}</Div>
          <F>F</F>
          <R>R</R>
          <O>O</O>
          <N>N</N>
          <T>T</T>
          <E>E</E>
          <N1>N</N1>
          <D>D</D>
          <B> </B>
          <S>S</S>
          <C>C</C>
          <H>H</H>
          <O1>O</O1>
          <O2>O</O2>
          <L>L</L>
        </EllipseParent>
        <WeCreate>WE CREATE</WeCreate>
        <ProblemSolvers>PROBLEM SOLVERS</ProblemSolvers>
      </Header>
      <Footer>
        <FooterChild />
        <OmFrontendSchoolContainer>
          <OmFrontendSchool>Om Frontend School</OmFrontendSchool>
          <OmFrontendSchool>&nbsp;</OmFrontendSchool>
        </OmFrontendSchoolContainer>
        <IconSocialLinkedin alt="" src="/-icon-social-linkedin2.svg" />
        <Klagomlshantering>
          <OmFrontendSchool>Klagomålshantering</OmFrontendSchool>
          <OmFrontendSchool>&nbsp;</OmFrontendSchool>
        </Klagomlshantering>
        <VectorIcon alt="" src="/vector.svg" />
        <VectorIcon1 alt="" src="/vector1.svg" />
        <VectorIcon2 alt="" src="/vector2.svg" />
        <Feschoolgmailcom>fe.school@gmail.com</Feschoolgmailcom>
        <OmOss>
          <OmFrontendSchool>Om oss</OmFrontendSchool>
          <OmFrontendSchool>&nbsp;</OmFrontendSchool>
        </OmOss>
        <VrtUtbildningskoncept>Vårt utbildningskoncept</VrtUtbildningskoncept>
        <JobbaHosOss>Jobba hos oss!</JobbaHosOss>
        <Dataskydd>Dataskydd</Dataskydd>
        <EmojiHerbIcon1 alt="" src="/-emoji-herb2.svg" />
        <EmojiHerbIcon2 alt="" src="/-emoji-herb1.svg" />
      </Footer>
      <Content>
        <ContentChild />
        <Frontendutveckling>Frontendutveckling</Frontendutveckling>
        <Information1>Information</Information1>
        <SomFrontendutvecklareSkaparContainer>
          <OmFrontendSchool>
            Som frontendutvecklare skapar du med hjälp av kod det
            presentationslager som gör att människor kan interagera med
            tekniken, du arbetar med det man ser och använder när man surfar på
            en webbplats.
          </OmFrontendSchool>
          <OmFrontendSchool>&nbsp;</OmFrontendSchool>
          <OmFrontendSchool>
            En frontendutvecklare arbetar huvudsakligen med modern
            webbutveckling med inriktning på responsiv webb och mobila
            plattformar. För att skapa interaktivitet och responsivt innehåll
            används en blandning av JavaScript och ramverk tillsammans med HTML
            och CSS. Även om utbildningen har ett fokus på frontend så kommer du
            även läsa angränsande områden som backend som ger dig möjligheten
            att gå mot fullstackutvecklare senare i karriären.
          </OmFrontendSchool>
          <OmFrontendSchool>&nbsp;</OmFrontendSchool>
          <OmFrontendSchool>
            I denna utbildning får du specialiserade kunskaper inom
            frontendutveckling med JavaScript men också överblick över
            angränsande områden som projektledning, testning, backendutveckling
            och UX/UI. Du kommer att kunna arbeta med att planera, utföra samt
            identifiera resurser för att kunna utveckla säkra webbapplikationer
            med frontendutveckling.
          </OmFrontendSchool>
          <OmFrontendSchool>&nbsp;</OmFrontendSchool>
          <OmFrontendSchool>
            Efter utbildningen är målet att du självständigt ska kunna ansvara
            för frontendutvecklingen i ett webbprojekt med särskilt fokus på
            säkerhetsaspekter och vara delaktig i kvalitetssäkring av
            webbutvecklingsarbetet genom att övervaka och följa upp att
            projektet levererar det som definierats enligt kravspecifikation,
            samt vid behov kommunicera problem och ge förslag på lösningar.
          </OmFrontendSchool>
        </SomFrontendutvecklareSkaparContainer>
        <SprkkunskaperSomProgrammet>
          Språkkunskaper som programmet erbjuder:
        </SprkkunskaperSomProgrammet>
        <IconJavascriptJs alt="" src="/-icon-javascript-js.svg" />
        <IconFileTypeCss alt="" src="/-icon-file-type-css.svg" />
        <IconFileTypeHtml alt="" src="/-icon-file-type-html.svg" />
        <IconReact alt="" src="/-icon-react.svg" />
        <R400Container>
          <OmFrontendSchool>{`2 år • 400 Yh-poäng • Klassrum • Heltid • Göteborg & Stockholm`}</OmFrontendSchool>
        </R400Container>
      </Content>
    </MacbookAir2Root>
  );
};

export default MacBookAir2;
