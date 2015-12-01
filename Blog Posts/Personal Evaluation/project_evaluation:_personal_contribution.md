
#Project Evaluation: Personal Contribution

## Introduction

I worked on the Filter Bubbles Project in the Dynamic Web Unit with Ade and Johan. We were a great team and worked well together. It was quickly noticeable that we were all aware of each other skills and abilities in terms of not only coding/programming, but also design skills and organisational skills.  

Our project was HashtagChristmas. The idea behind it was to show the top related hashtags on Instagram to the hashtag #Christmas. We used the Instagram API along with TweenMax and Underscore.js to display the most recent images of that hashtag.


##Team Contribution

As we were aware of each others abilities, from previous projects and being friends outside of Uni, we were able to organise ourselves into more defined roles to be most effective and productive to pull off the task. Johan and Ade we're better at the coding and programming side and understand jQuery to a higher level than myself.


##Personal Contribution

My role in this project focused largely on the idea, development, concept, design, HTML & CSS and Team Management and Organisation.

### Concept and Ideation 

In the beginning of the process I was largely responsible for the idea of not focusing on an individual's perspective of something, through filter bubbles which we learnt about, but instead, to focus on a group of people (Be it a Culture, Religion, Country etc.). I took this idea further and developed it into what HashtagChristmas is today. My team and I both contributed to this, however I felt that I led this ideation forward allowed for my team to have a clear development of the project and not go off task. Trying to relate to filter bubbles as much as possible, be it agree or disagree with them.

### Planning

The next stage of the process was to begin planning how the site is going to look and function. How it will be possible for the site to get Hashtags and Images from Instagram and display them.

#### Mind Maps

We began by creating a Mind Map of our Filter Bubbles. I personally created one for myself, so I could self-identify what filters I am exposed to online and what is potentially not being shown on my online bubble, due to these Interests. This proved effective when communicating with my team as they had a greater understanding of how filter bubbles work from my example. The mind map we created, highlighted all of the common Interests that we have and search for online including: Online Video, Social Media etc.


#### Wire framing

I designed digital Wireframes on Moqups that were linked via hotspots to the pages. This was a great way to visually show our ideas for the product in a way which is Interactive for the user. We had a great response from peer feedback during our Formative Assessment of this and used it to build on a more interactive experience when designing the final outcome. 


### Design

I was responsible for designing the HashtagChristmas Logo. I did so following some key trends around both design (with the minimalistic monochromatic approach of a single colour (black)), but also with design trends around Christmas. An example of this was the font used is typical of the season and instantly gives an impression of festivities when seen. This was a key element for the logo, for people to Instantly known it was based around Christmas.

The name of the project was also my idea. I wanted to make it very clear, simple and obvious what we were about (as the backend of how it worked is complicated to someone more novice). The name "HashtagChristmas" is clearly about Christmas and clearly also involves Hashtags, suggesting it is linked to Social Media in some way. 


### HTML, CSS & Javascript

In preparation from our Formative Assessment, I took these digital Wireframes and decided to make a HTML & CSS version that was hosted locally on MAMP for myself and the team to use to show our development of the project. It was a very basic site which had the background image, along with a CSS coded Circle with the hashtag centred in the middle with some navigation.

After the assessment, I then took this HTML Wireframe and developed it into making the next steps such as having multiple bubbles. I used classes to help Identify the stages such a "cont" for the big bubble, then "cont2-1", "cont-2", "cont-3", "cont-4" for the 4 bubbles step. I repeated this for the 16 bubbles level. This clear organisation made my team's progressive faster and meant that we followed this convention when styling and adding animations via TweepMax.js.

                <!-- 1 Block  -->
        <div id="cont1">
                 
            <div id="cont">
                <div id="testFifty"></div>
                
                
              <h1 id="xmasText" class="HashTags">#Christmas</h1>

                    </div>
                    
        </div>

                

            <!-- 4 Block -->
        <div id="cont2">
                    <div id="cont2-1" >
                            <img class="imgfill" src="http://www.thebramptonhalt.co.uk/look/xmas_back_2013.jpg">
                                <h3  id="text2-1" class="HashTags"></h3>
                    </div>
                    <div id="cont2-2">
                        <h3 id="text2-2" class="HashTags"></h3>
                        <img class="imgfill" src="http://www.thebramptonhalt.co.uk/look/xmas_back_2013.jpg">
                    </div>
                    <div id="cont2-3">
                        <h3 id="text2-3" class="HashTags"></h3>
                        <img class="imgfill" src="http://www.thebramptonhalt.co.uk/look/xmas_back_2013.jpg">
                    </div>
                    <div id="cont2-4">
                        <h3 id="text2-4" class="HashTags"></h3>
                        <img class="imgfill" src="http://www.thebramptonhalt.co.uk/look/xmas_back_2013.jpg">
                    </div>
                </div> 

                
            <!-- 16 Block -->
        <div id="cont3">
                  <!-- Top Left -->
                    <div class="cont2-1">
                        <div id="cont2-1-1">
                            <h4 id="text2-1-1" class="HashTags"></h4>
                            <img class="imgfill" src="http://www.thebramptonhalt.co.uk/look/xmas_back_2013.jpg">
                        </div>
                        <div id="cont2-1-2">
                            <h4 id="text2-1-2" class="HashTags"></h4>
                            <img class="imgfill" src="http://www.thebramptonhalt.co.uk/look/xmas_back_2013.jpg">
                        </div>
                        <div id="cont2-1-3">
                            <h4 id="text2-1-3" class="HashTags"></h4>
                            <img class="imgfill" src="http://www.thebramptonhalt.co.uk/look/xmas_back_2013.jpg">
                        </div>
                        <div id="cont2-1-4">
                            <h4 id="text2-1-4" class="HashTags"></h4>
                            <img class="imgfill" src="http://www.thebramptonhalt.co.uk/look/xmas_back_2013.jpg">
                        </div>
                    </div>                    

 </div>

I also created a blacklist that excludes certain Hashtags from being included into the related hashtags. I did a lot of research into what we're the spam hashtags. This also meant that I had run lots of tests to measure if any hashtags that were inappropriate managed to still get through. I created a blacklist.js file which contained over 230+ hashtags which are excluded from our algorithm. 

### Team Management / Organisation

I was hugely responsible for our teams communications and ensuring that everyone is aware of their responsibilities on a weekly basis. I set up a Facebook group chat, which our team was best suited for as we were always online and notifications come through to all of our phones and laptops. This was identified as clearly being the best way to speak with one another outside of University.

I also organised the team and helped to define roles and manage both Ade and Johan when it came to coding and programming. I had some input assisting them both with the majority of things that we did, however, they led the coding and I helped to ensure that they did not conflict when writing code to break the site.

On the teams GitHub Repository, I organised the files to ensure it was clear to understand and wrote the README.md document introducing and explaining what we did. I felt that this was a key element to looking professional and 'selling' our product to our peers and tutors during the final Summative Presentation.


### Presentation

I took the lead to design both the formative and summative presentation. I aimed to tell a story of our project by leading people through the processes that we took from the planning and research, right up until the implementation and testing of our working site. Both these presentations were designed by myself and notes curated between the group.


## Learning Outcomes

I met the learning outcomes for this project based from my personal Contribution to this unit. 

## Summary

I have really enjoyed this unit, and although it be challenging, have found it very valuable and interesting. Our team worked very well together and testing our limitations to what we could previously do. I have learnt valuable skills which I did not know before and have worked with many languages and scripts which I will undoubtably see again when working in Industry.