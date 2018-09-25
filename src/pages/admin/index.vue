<template>
  <div class="ico">
    <b-navbar toggleable="md" type="light" :sticky="true">
      <b-container class="bv-example-row">
        <b-navbar-brand href="javascript:;" class="scrollTarget" @click="scrollTo(0)" index="0"><img src="@/assets/images/logo-black.png" alt="Logo"></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item href="javascript:;" @click="scrollTo(2)">FAQ</b-nav-item>
            <b-nav-item href="javascript:;" @click="scrollTo(1)">TEAM</b-nav-item>
            <b-nav-item href="javascript:;">BOUNTY</b-nav-item>
            <b-nav-item href="javascript:;">BLOG</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <!-- <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->
            <b-nav-item-dropdown text="DOWNLOAD OUR WHITEPAPER" right>
              <!-- Using button-content slot -->
              <!-- <template slot="button-content">
                <em>User</em>
              </template> -->
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">CN</b-dropdown-item>
              <b-dropdown-item href="#">HK</b-dropdown-item>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">VN</b-dropdown-item>
            </b-nav-item-dropdown>

            
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>
    <div class="content-main">
      <div class="box">
        <div class="page page1">
          <div class="video">
            <video
                v-show="showVideo"
                id="my-player"
                class="video-js"
                autoplay="autoplay"
                loop="loop"
                preload="preload"
                poster="http://g.h.img.whoolala.com/original/pqib7xuaizl20180906170214_1920x1080.jpg" 
                muted="muted" 
                playsinline
                >
              <source src="https://whoolaladownloads.oss-cn-shanghai.aliyuncs.com/assets/videos/animations-small.mp4" type="video/mp4"></source>
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="http://videojs.com/html5-video-support/" target="_blank">
                  supports HTML5 video
                </a>
              </p>
            </video>
          </div>
          <b-container class="bv-example-row">
            <b-row>
              <b-col lg="5" md="6" sm="12">
                <h2 class="wow fadeInDown">The future of <br /> advertising is here.</h2>
                <p class="wow fadeInLeftSm">Welcome to an efficient solution for advertisers and brands to work with influencers and consumers that enables globally trustful cooperation. Decentralized. Empowered by the Ethereum blockchain.</p>
                <div class="btns wow fadeInUp">
                  <a href="#" class="btn btn-lg btn-black" data-toggle="modal" data-target=".getWhitelisted">Watch Video</a>
                  <b-button v-b-modal.getWhitelisted size="lg" variant="outline-secondary">Get Whitelisted <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></b-button>
                  <!-- <a href="#" class="btn btn-default btn-lg" data-toggle="modal" data-target=".getWhitelisted-2">Get Whitelisted <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></a> -->
                </div>
              </b-col>
              <b-col lg="6" md="6" sm="12" class="text-center wow fadeInRightSm" offset-lg="1">
                <div class="sTime">
                  <div class="content">
                    <div><span>Token sale ends in:</span></div>
                    <count-down v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)" :currentTime="startTime" :startTime="startTime" :endTime="endTIme" :tipText="'距离开始文字1'" :tipTextEnd="'距离结束文字1'" :endText="'结束自定义文字2'"></count-down>
                    <div class="buyToken"><a href="#" class="btn btn-blue">Buy tokens</a></div>
                    <div class="pressBox">
                      <div class="press-top-tip"><span>Softcap</span></div>
                      <div class="press"><span>3347 ETH</span></div>
                      <div class="press-bottom-tip"><span>Hardcap</span></div>
                    </div>
                    <div class="tokens-info">
                      <p>Total Token supply: <strong>60,000,000</strong></p>
                      <p>Tokens for sale: <strong>30,000,000</strong></p>
                      <p>Token price: <strong>$0.50</strong></p>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="box">
        <div class="page page2">
          <div class="bBg bTop"></div>
            <div class="content">
              <b-container class="bv-example-row">
                <div class="wow fadeInUp">
                  <h3>Community Influence Token</h3>
                  <p>Collaborating with influencers and consumers requires trust, but current systems are complicated and outdated.</p>
                  <p>We use smart contracts to simplify the relationship.</p>
                </div>
                <div class="cit wow fadeInUpSm">
                  <img src="http://g.h.img.whoolala.com/original/qtmrdo5ye9d20180906170213_1533x960.png" alt="CIT" />
                </div>
              </b-container>
            </div>
          <div class="bBg bBottom"></div>
        </div>
      </div>
      <div class="box">
        <div class="page page3">
          <b-container class="bv-example-row">
            <b-row class="wow fadeInUpSm">
              <b-col md="6" sm="12" class="page3-left-info mh-process-item">
                <h3>Bringing ad-tech to influencer marketing</h3>
                <p>While the ad-tech industry has made significant improvements when it comes to targeting and attribution, the influencer marketing industry is lagging behind. By allowing advertisers to work with influencers using standard advertising models like CPM, CPC and CPS, we take the risk out of working with influencers.</p>
              </b-col>
              <b-col md="6" sm="12" class="mh-process-item">
                <div class="page3-img sm-img">
                  <img src="http://g.h.img.whoolala.com/original/wgu9kz8jaub20180906170211_387x300.png">
                </div>
              </b-col>
            </b-row>
            <b-row class="wow fadeInUpSm">
              <b-col md="6" sm="12" order-md="12" class="page3-right-info mh-process-item">
                <h3>Bringing ad-tech to influencer marketing</h3>
                <p>While the ad-tech industry has made significant improvements when it comes to targeting and attribution, the influencer marketing industry is lagging behind. By allowing advertisers to work with influencers using standard advertising models like CPM, CPC and CPS, we take the risk out of working with influencers.</p>
              </b-col>
              <b-col md="6" sm="12" order-md="1" class="mh-process-item">
                <div class="page3-img">
                  <img src="http://g.h.img.whoolala.com/original/uwf6xzm70sg20180906170211_578x309.png">
                </div>
              </b-col>
            </b-row>
            <b-row class="wow fadeInUpSm">
              <b-col md="6" sm="12" class="page3-left-info mh-process-item">
                <h3>Fast, trustless payments</h3>
                <p>With the help of smart contracts on the Ethereum blockchain, we are able to empower advertisers to offer secure, risk-free payments to Influencers. A smart contract on the Ethereum blockchain acts as an escrow service between advertisers and influencers to ensure payment is made in full and on time, every time.</p>
              </b-col>
              <b-col md="6" sm="12" class="mh-process-item">
                <div class="page3-img mh-process-item-chart-timeline">
                  <img src="http://g.h.img.whoolala.com/original/u676rige2du20180906170213_947x233.png">
                </div>
              </b-col>
            </b-row>
            <b-row class="wow fadeInUpSm">
              <b-col md="12">
                <div class="Phone">
                  <img src="http://g.h.img.whoolala.com/original/cboy0bap7sg20180906170213_2341x914.png" class="Phone-lg" alt="">
                  <img src="http://g.h.img.whoolala.com/original/ikpq5ofd6z820180906170213_1271x914.png" class="Phone-sm" alt="">
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="box">
        <div class="page page4">
          <b-container class="bv-example-row">
            <b-col md="12" class="text-center wow zoomInSm" data-wow-duration="1s">
              <h3>Get whitelisted now!</h3>
              <p>We require all token holders to verify their identity and go through KYC/AML checks. Citizens of the <a href="#">these countries</a> are not allowed to participate.</p>
              <div>
                <b-button size="lg">Get Whitelisted <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></b-button>
                <!-- <a href="#" class="btn btn-default btn-lg" data-toggle="modal" data-target=".getWhitelisted-3">Get Whitelisted <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></a> -->
              </div>
              <div class="network-til">Network with us:</div>
              <div class="network-img">
                <a href="#"><img src="http://g.h.img.whoolala.com/original/kjd4ymn8ko820180906170211_121x121.png" alt="fb"></a>
                <a href="#"><img src="http://g.h.img.whoolala.com/original/6o1eqeqau6k20180906170211_120x120.png" alt="telegram"></a>
                <a href="#"><img src="http://g.h.img.whoolala.com/original/bqhaihjtst920180906170211_140x120.png" alt="medium"></a>
              </div>
            </b-col>
          </b-container>
        </div>
      </div>
      <div class="box">
        <div class="page page5">
          <b-container class="bv-example-row">
            <b-row>
              <b-col md="12">
                <div class="page5-head">
                  <h3>The Whoolala Token Sales Event</h3>
                  <p>We are planning to raise a maximum of 55,000 ETH</p>
                </div>
                <div class="page5-press">
                  <div class="press">
                    <span class="wow wow-width" data-width="13%"></span>
                  </div>
                  <div class="press-tip">
                    <div>
                      <p>5,000 ETH</p>
                      <p>Minimum Raise</p>
                    </div><div>
                      <p>17,000 ETH</p>
                      <p>Soft Cap</p>
                    </div><div>
                      <p>55,000 ETH</p>
                      <p>Hard Cap</p>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row class="page5-info">
              <b-col md="7">
                <div class="row basics wow fadeInUp">
                  <div class="col-sm-4"><strong>THE BASICS</strong></div>
                  <div class="col-sm-8 ">
                    <ul>
                      <li>Total Token supply<span>60,000,000</span></li>
                      <li>Tokens for sale<span>30,000,000</span></li>
                      <li>Token price<span>$0,50</span></li>
                    </ul>
                  </div>
                </div>
                <div class="row istribution wow fadeInUpSm">
                  <div class="col-sm-4"><strong><span>TOKEN</span> <span>DISTRIBUTION</span></strong></div>
                  <div class="col-sm-8">
                    <ul>
                      <li><i class="bg-1"></i><span>Tokens sold</span><span class="cl c-1">50%</span></li>
                      <li><i class="bg-2"></i><span>Advertisers, Influencers and Consumers</span><span class="cl c-2">20%</span></li>
                      <li><i class="bg-3"></i><span>Future company financing</span><span class="cl c-3">10%</span></li>
                      <li><i class="bg-4"></i><span>Whoolala Team</span><span class="cl c-4">7%</span></li>
                      <li><i class="bg-5"></i><span>3rd party launch costs</span><span class="cl c-5">8%</span></li>
                      <li><i class="bg-6"></i><span>Long term team retention</span><span class="cl c-6">3%</span></li>
                      <li><i class="bg-7"></i><span>Bounty program</span><span class="cl c-7">2%</span></li>
                      <li><i class="bg-8"></i><span>Advisors</span><span class="cl c-8">2%</span></li>
                    </ul>
                  </div>
                </div>
              </b-col>
              <b-col md="5">
                <div class="page5-img wow zoomInSm" data-wow-duration="1s"><img src="http://g.h.img.whoolala.com/original/o2ta6s0pxrk20180906170213_972x972.png" alt="Chart"></div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="box">
        <div class="page page6">
          <b-container class="bv-example-row">
            <b-row>
              <b-col md="12">
                <div class="page5-head">
                  <h3>Timeline of our vision.</h3>
                  <p>This timeline details our funding and development goals.</p>
                </div>
              </b-col>
            </b-row>
            <b-row class="row-eq-height">
              <b-col md="6" order-md="12" order-sm="1" class="mh-roadmap-element mh-roadmap-right-grey mh-roadmap-right-blue"></b-col>
              <b-col md="6" order-md="1" order-sm="11" class="mh-roadmap-element mh-roadmap-left-grey mh-roadmap-left-blue">
                <hr>
                <div class="wow fadeInUpSm">
                  <div class="mh-roadmap-step">
                    <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="check">
                    <span>PRE-ICO PROJECT</span>
                  </div>
                  <div class="mh-roadmap-caption">
                    Founding of Whoolala ($150k USD funding/September 2014)
                  </div>
                  <div class="mh-roadmap-description">The Whoolala project was born! We started the company in September 2014 and received $150k angel financing. Since then we’ve raised an additional $1m+ from fashion indsutry giants like Bluebell Asia.</div>
                </div>
                <div class="mh-roadmap-circle-grey mh-roadmap-circle-blue"></div>
              </b-col>
            </b-row>
            <b-row class="row-eq-height">
              <b-col md="6" class="mh-roadmap-element mh-roadmap-left-grey mh-roadmap-left-blue"></b-col>
              <b-col md="6" class="mh-roadmap-element mh-roadmap-right-grey mh-roadmap-right-blue">
                <hr>
                <div class="wow fadeInUpSm">
                  <div class="mh-roadmap-step">
                    <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="check">
                    <span>PHASE 1</span>
                  </div>
                  <div class="mh-roadmap-caption">Start of the CIT project (June 2018)</div>
                  <div class="mh-roadmap-description">A Whoolala team of blockchain and influencer marketing enthusiasts came together for an epic venture into shaking up the influencer marketing industry.</div>
                </div>
                <div class="mh-roadmap-circle-grey mh-roadmap-circle-blue"></div>
              </b-col>
            </b-row>
            <b-row class="row-eq-height">
              <b-col md="6" order-md="12" class="mh-roadmap-element mh-roadmap-right-grey"></b-col>
              <b-col md="6" order-md="1" class="mh-roadmap-element mh-roadmap-left-grey">
                <hr>
                <div class="wow fadeInUpSm">
                  <div class="mh-roadmap-step">
                    <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="check">
                    <span>PHASE 2</span>
                  </div>
                  <div class="mh-roadmap-caption">
                    ICO (September 2018)
                  </div>
                  <div class="mh-roadmap-description">First priority after the crowdsale is to gather the best team possible and to attract talented and accomplished people from advertising, blockchain, Fintech industries.</div>
                </div>
                <div class="mh-roadmap-circle-grey"></div>
              </b-col>
            </b-row>
            <b-row class="row-eq-height">
              <b-col md="6" class="mh-roadmap-element mh-roadmap-left-grey"></b-col>
              <b-col md="6" class="mh-roadmap-element mh-roadmap-right-grey">
                <hr>
                <div class="wow fadeInUpSm">
                  <div class="mh-roadmap-step">
                    <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="check">
                    <span>PHASE 3</span>
                  </div>
                  <div class="mh-roadmap-caption">Social commerce + first version of the influence rating (Early 2019)</div>
                  <div class="mh-roadmap-description">Develop a fully-functional social commerce platform on top of the existing Whoolala Platform with a user interface for advertisers to run CPA (cost per acquisition) ads and payment up front ads while leveraging the first version of the influencer rating.</div>
                </div>
                <div class="mh-roadmap-circle-grey"></div>
              </b-col>
            </b-row>
            <b-row class="row-eq-height">
              <b-col md="6" order-md="12" class="col-sm-push-6 mh-roadmap-element mh-roadmap-right-grey"></b-col>
              <b-col md="6" order-md="1" class="col-sm-pull-6 mh-roadmap-element mh-roadmap-left-grey">
                <hr>
                <div class="wow fadeInUpSm">
                  <div class="mh-roadmap-step">
                    <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="check">
                    <span>PHASE 4</span>
                  </div>
                  <div class="mh-roadmap-caption">
                    Consumer reward program + the ability to use CIT on the Whoolala platform + improved advertiser/influencer dashboards (Mid 2019)
                  </div>
                  <div class="mh-roadmap-description">Allow influencers to reward users for sharing via the consumer reward program, accept CIT as payment on the Whoolala platform and enable users, influencers and advertisers to transfer CIT to their preferred account. Moreover, real-time analytics, and improved real-time dashboards for advertisers/influencers will be introduced during this stage.</div>
                </div>
                <div class="mh-roadmap-circle-grey"></div>
              </b-col>
            </b-row>
            <b-row class="row-eq-height">
              <b-col md="6" class="mh-roadmap-element mh-roadmap-left-grey"></b-col>
              <b-col md="6" class="mh-roadmap-element mh-roadmap-right-grey">
                <hr>
                <div class="wow fadeInUpSm">
                  <div class="mh-roadmap-step">
                    <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="check">
                    <span>PHASE 5</span>
                  </div>
                  <div class="mh-roadmap-caption">Add more payment models for advertisers + significant improvement of the decentralized influence rating algorithm (Late 2019)</div>
                  <div class="mh-roadmap-description">Make a significant step towards a fully working decentralized influence rating system: improvement of decentralized influence rating algorithm, introduction of more payment models such as CPC (cost per click), CPM (cost per mille), CPE (cost per engagement), etc. Finally, the Whoolala platform loyalty program will be enabled during this stage of development.</div>
                </div>
                <div class="mh-roadmap-circle-grey"></div>
              </b-col>
            </b-row>
            <b-row class="row-eq-height">
              <b-col md="6" order-md="12" class="col-sm-push-6 mh-roadmap-element mh-roadmap-right-grey"></b-col>
              <b-col md="6" order-md="1" class="col-sm-pull-6 mh-roadmap-element mh-roadmap-left-grey">
                <hr>
                <div class="wow fadeInUpSm">
                  <div class="mh-roadmap-step">
                    <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="check">
                    <span>PHASE 6</span>
                  </div>
                  <div class="mh-roadmap-caption">
                    Offline payments for merchants (Early 2020)
                  </div>
                  <div class="mh-roadmap-description">Develop an offline payment system for merchants to receive CIT as payment for goods in physical offline stores. This will allow advertisers to not only drive traffic to their online store, but also drive customers to their offline stores and track the entire sales funnel on the Whoolala Platform dashboard.</div>
                </div>
                <div class="mh-roadmap-circle-grey"></div>
              </b-col>
            </b-row>
            <b-row class="row-eq-height">
              <b-col md="6" class="mh-roadmap-element mh-roadmap-left-grey mh-roadmap-light-grey"></b-col>
              <b-col md="6" class="mh-roadmap-element mh-roadmap-right-grey mh-roadmap-light-grey">
                <hr>
                <div class="wow fadeInUpSm">
                  <div class="mh-roadmap-step">
                    <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="check">
                    <span>PHASE 7</span>
                  </div>
                  <div class="mh-roadmap-caption">Offline photoshoot locations (Mid 2020)</div>
                  <div class="mh-roadmap-description">Create offline spaces for influencers and Whoolala users to take great photographs and experience products from the Whoolala Platform. These spaces will be used primarily by users, but will also be utilized to build local communities and run events to educate the community about how to take great photos, write good content, and how to use the Whoolala Platform.</div>
                </div>
                <div class="mh-roadmap-circle-grey"></div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="box scrollTarget" index="2">
        <div class="page page7 team">
          <b-container class="bv-example-row">
            <b-row>
              <b-col md="12" class="team-head">
                <h3>Whoolala team</h3>
                <p>Let us introduce you to the team that will make it happen.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3" class="wow fadeInUpSm">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".1s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".2s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".3s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3" class="wow fadeInUpSm">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".1s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".2s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".3s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="box">
        <div class="page page8 team">
          <b-container class="bv-example-row">
            <b-row>
              <b-col md="12" class="team-head">
                <h3>Advisory team</h3>
                <p>Say hi to the advisory team that will help Whoolala along the road to success.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3" class="wow fadeInUpSm">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".1s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".2s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".3s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3" class="wow fadeInUpSm">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".1s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".2s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="wow fadeInUpSm" data-wow-delay=".3s">
                <div class="team-item">
                  <div class="team-photo">
                    <img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg" alt="team">
                  </div>
                  <div class="team-description">
                    <div class="team-name">
                      Steve Murray
                    </div>
                    <div class="team-position">
                      CEO & Co-Founder
                    </div>
                    <div class="team-about">
                      Passionate and creative leader with strong understanding of technology and e- commerce. University of Dundee, BSc, Innovative Product Design.
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="box scrollTarget" index="1">
        <div class="page page9 faq">
          <b-container class="bv-example-row">
            <b-row>
              <b-col md="12">
                <div class="faq-head">
                  <h3>FAQ</h3>
                  <p>Frequently asked questions about CIT</p>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <ul class="faq-list">

                  <li v-for="(item,index) in faqList">
                    <div class="faq-item-wrap">
                      <div class="faq-item-til" @click="toggleList($event,index)" :class="{open:(index == cur && isOpen)}">
                        <i class="fa fa-caret-right" aria-hidden="true"></i>{{item.title}}
                      </div>
                      <div class="faq-item-content">
                        <div>
                        {{item.content}}
                        </div>
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="box">
        <div class="page page10 footer">
          <b-container class="bv-example-row">
            <b-row>
              <b-col md="12">
                <div class="footer-head">
                  <h3>The future of advertising is here.</h3>
                  <div>
                    <b-button size="lg">Get Whitelisted <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></b-button>
                    <!-- <a href="javascript:;" class="btn btn-default btn-lg" data-toggle="modal" data-target=".getWhitelisted-4">Get whitelisted now <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></a> -->
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="4">
                <div class="copyright">© Whoolala Singapore Ltd 2018. All Rights Reserved. <br>Terms and Conditions</div>
              </b-col>
              <b-col md="8">
                <div class="footer-nav">
                  <ul>
                    <li><a href="#FAQ">FAQ</a></li>
                    <li><a href="#TEAM">TEAM</a></li>
                    <li><a href="#">BOUNTY</a></li>
                    <li><a href="#">BLOG</a></li>
                  </ul>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
    
    <!-- modal层 -->
    <b-modal id="getWhitelisted" size="lg" :hide-header="true" :hide-footer="true" centered>
      <div class="row">
        <div class="col-sm-12">
          <div class="getWhitelisted-head">
            <h3>Get Whitelisted</h3>
            <p>1. Verify email address</p>
          </div>
          <div class="addressForm">
            <ul>
              <li>
                <label>Email</label>
                <div>
                  <input type="text" id="email" name="email" placeholder="john@whoolala.com,etc.(require)">
                  <div class="error" data-err="邮箱格式不正确。" data-existing="邮箱已被注册。" data-require="邮箱不能为空。"></div>
                </div>
              </li>
              <li>
                <label>Password</label>
                <div>
                  <input type="password" name="password" placeholder="Enter the password (require)">
                  <a href="javascript:;" class="viewPw"><i class="fa fa-eye-slash" data-show="fa fa-eye-slash" data-hidden="fa fa-eye" aria-hidden="true"></i></a>
                  <div class="error" data-err="只能输入6-20个字母、数字、下划线。" data-require="密码不能为空。"></div>
                </div>
              </li>
              <li>
                <a href="javascript:;" class="btn btn-lg btn-black submitBtn submitBtn-1">Continue <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal id="getWhitelisted-2" size="lg" :hide-header="true" :hide-footer="true" centered>
      <div class="row">
        <div class="col-sm-12">
          <div class="getWhitelisted-head">
            <h3>Get Whitelisted</h3>
            <p>2. Personal Details</p>
          </div>
          <div class="addressForm">
            <ul>
              <li>
                <label>Full Name</label>
                <div>
                  <input type="text" name="fullName" placeholder="Enter the Full Name.">
                  <div class="error" data-require="Enter the Full Name."></div>
                </div>
              </li>
              <li>
                <label>Gender</label>
                <div>
                  <div class="customSelect">
                    <select name="gender">
                      <option value="">Please select a gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="placeholder">Please select a gender</div>
                    <div class="selected-text"></div>
                    <ul class="select-list">
                      <li>Female</li>
                      <li>Male</li>
                    </ul>
                  </div>
                  <div class="error" data-require="Please select a gender."></div>
                </div>
              </li>
              <li>
                <label>Date of Birth</label>
                <div>
                  <input type="date" name="birth" placeholder="yyyy/mm/dd">
                  <div class="error" data-require="Please enter the birthday."></div>
                </div>
              </li>
              <li>
                <label>Country of Residence</label>
                <div>
                  <div class="customSelect regions">
                    <select name="">
                      <option value="">United Kingdom</option>
                      <option value="China">China</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Cambodia">Cambodia</option>
                    </select>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="placeholder">United Kingdom</div>
                    <div class="selected-text"></div>
                    <ul class="select-list">
                      <li>China</li>
                      <li>Hong Kong</li>
                      <li>Vietnam</li>
                      <li>Cambodia</li>
                    </ul>
                  </div>
                  <div class="error" data-require="Please select a country to live."></div>
                </div>
              </li>
              <li>
                <label>Nationality</label>
                <div>
                  <div class="customSelect regions">
                    <select name="">
                      <option value="">United Kingdom</option>
                      <option value="China">China</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Cambodia">Cambodia</option>
                    </select>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="placeholder">United Kingdom</div>
                    <div class="selected-text"></div>
                    <ul class="select-list">
                      <li>China</li>
                      <li>Hong Kong</li>
                      <li>Vietnam</li>
                      <li>Cambodia</li>
                    </ul>
                  </div>
                  <div class="error" data-require="Please select a nationality."></div>
                </div>
              </li>
              <li>
                <label>Ether Wallet Address</label>
                <div>
                  <input type="text" name="" placeholder="Ether Wallet Address">
                  <div class="error" data-require="Ether Wallet Address."></div>
                </div>
              </li>
              <li>
                <a href="javascript:;" class="btn btn-lg btn-black submitBtn submitBtn-2">Continue <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal id="getWhitelisted-3" size="lg" :hide-header="true" :hide-footer="true" centered>
      <div class="row">
        <div class="col-sm-12">
          <div class="getWhitelisted-head">
            <h3>Get Whitelisted</h3>
            <p>3. ID Verification</p>
            <p>In order to verify your identity, we need:</p>
          </div>
          <div class="upload-img">
            <ul>
              <li class="upload-img-item">
                <div class="upload-wrap">
                  <div class="upload-face"><img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg"></div>
                  <a href="javascript:;" class="uploadBtn"><i class="fa fa-upload" aria-hidden="true"></i> Upload picture</a>
                </div>
                <p>A selfie photo showing your unobscured face holding your current passport or valid ID card.</p>
              </li><li class="upload-img-item">
                <div class="upload-wrap">
                  <div class="upload-face"><img src="http://g.h.img.whoolala.com/x/6gc8cdexev52018-05-15-16-38-50_1000x1000.jpeg"></div>
                  <a href="javascript:;" class="uploadBtn"><i class="fa fa-upload" aria-hidden="true"></i> Upload picture</a>
                </div>
                <p>A clos face holding your current passport or valid ID card.</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="addressForm">
            <ul>
              <li>
                <a href="javascript:;" class="btn btn-lg btn-black submitBtn submitBtn-3">Continue <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal id="getWhitelisted-4" size="lg" :hide-header="true" :hide-footer="true" centered>
      <div class="row">
        <div class="col-sm-12">
          <div class="getWhitelisted-head">
            <h3>Get Whitelisted</h3>
            <p>4. Complete</p>
          </div>
          <div class="successBox">
            <img src="http://g.h.img.whoolala.com/original/a01fembh8rn20180906170211_50x52.png" alt="success">
            <p class="suc-msg">Your application has been submitted successfully.</p>
            <p>We’ll let you know via email as soon as your application is approved.</p>
          </div>
          <div class="addressForm">
            <ul>
              <li>
                <a href="javascript:;" class="btn btn-lg btn-black submitBtn submitBtn-4">Continue <i class="fa fa-long-arrow-right" aria-hidden="true" style="font-size:16px;"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
  import { WOW } from 'wowjs';
  import scrollTo from '@/assets/js/scrollToTop';
  let faqList = [
    {
      title:'What does CIT stand for and what is it?',
      content:'Community Influence Token. CIT is a token built on the Ethereum protocol, and is a unit of exchange in a new Blockchain based digital advertising system. Influencers are incentivized using CIT to create and distribute branded content. Consumers also get a share of CITs for participating.'
    },
    {
      title:'What do CITs represent?',
      content:'CITs are tokens intended to be used solely on the Whoolala Platform, which is a new Blockchain based digital advertising system. Please refer to section 4.3 in our whitepaper, as well as the terms and conditions of the token sale.'
    },
    {
      title:'What is the total amount required? What is the cap on CIT? Will there be a follow-on sale?',
      content:'Whoolala is targeting a soft cap of USD 2m, which is the minimum amount calculated to achieve its objectives. There is an additional USD 13m for a hard cap of USD 15m.'
    },
    {
      title:'What crypto-currencies are accepted in the Crowdsale?',
      content:'ETH will be accepted in the Crowdsale. You will be required to have an Ethereum wallet pointed at the token/crowdsale address to participate in the crowdsale. CIT are Ethereum derived tokens. If you hold BTC or some other crypto-currency it can be exchanged for ETH and used to participate in the Crowdsale.'
    },
    {
      title:'When will the Crowdsale happen?',
      content:'The Crowdsale is planned to take place by October 15th, 2018. A presale is planned on September 28th, 2018. Note that the CIT crowd sale parameters will be tied to blocknumber, so times will depend on Ethereum mining rates.'
    },
    {
      title:'What is the price of CIT?',
      content:'CIT will be a fixed ratio to ETH. This may vary slightly with ETH volatility as we get closer to the contract deployment date. The exchange rate will be 1515 CIT per ETH.'
    },
    {
      title:'How will Whoolala use CIT during token launch?',
      content:'The ETH received in the Crowdsale will be used by Whoolala to build out the Blockchain-based digital advertising system, which uses CITs as a unit of exchange.'
    },
    {
      title:'How will Whoolala store ETH?',
      content:'Whoolala will use the standard Ethereum multisig wallet to store ETH.'
    },
    {
      title:'Are CIT tokens transferrable?',
      content:'Crowdsale tokens are immediately transferrable. Tokens earned in the Whoolala platform may only be donated or users to pay influencers to create content, rewards users for distributing content, or payment for products or services on the Whoolala platform.'
    },
  ]
  export default {
    components:{
      CountDown: () => import('../../components/vue2-countdown')
    },
    data(){
      return {
        showVideo: true,
        isOpen: false,
        faqList,
        cur:0,
        curTime:( new Date() ).getTime(),
        startTime:( new Date() ).getTime(),
        endTIme:( new Date('2018-10-1 00:00:00') ).getTime()
      }
    },
    methods:{
      scrollTo(index){
        scrollTo('scrollTarget',index)
      },
      countDownS_cb(a){
        // console.log(a)
      },
      countDownE_cb(a){
        // console.log(a)
      },
      hasBower(){
        var u = navigator.userAgent;
        if(u.indexOf("Android") !== -1 || u.indexOf("Linux") !== -1){
          this.showVideo = false
        }
      },
      toggleList(that,index){
        this.cur = index;
        var contents = document.querySelectorAll('.faq-item-content'),
        icon = document.querySelectorAll('.faq-item-til i');
        for(var i=0; i<contents.length; i++){
          contents[i].style.height = 0 +'px';
          icon[i].classList = 'fa fa-caret-right';
        }
        this.isOpen = that.target.classList.value.indexOf('open') !== -1
        ? false
        : true;
        let h = 0,
        contentDom = that.target.parentNode.children[1];

        if(this.isOpen){
          that.target.children[0].classList = 'fa fa-caret-down'
          h = contentDom.children[0].offsetHeight
        }
        contentDom.style.height = h  +'px';
        
      }
    },
    computed:{
      
    },
    mounted(){
      this.$crisp();
      this.hasBower();
      new WOW({
        callback:function(box) {
          /*if($(box).hasClass('wow-width')){
            $(box).width($(box).data('width'));
          }*/
        }
      }).init();
    }
  };
</script>
<style lang="scss" scoped>

  .content-main{
    overflow: hidden;
  }
  .navbar{
    // padding:0 1rem;
    background-color: white;
    box-shadow: 0 0 10px 2px rgba(193, 193, 193, 0.5);
    .navbar-brand{padding:9px 10px 9px 0;}
  }
  .btns button{
    display: block;
    width: 70%;
    margin: 10px auto;
    @media screen and (min-width: 768px) {
      width: auto;
      display: inline-block;
    }
  }
  .page3-img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .row-eq-height{
    display: flex;
  }
  .faq-item-wrap{
    height: auto;
  }
  .faq-item-til{
    margin-bottom: 10px;
  }
  .faq-item-content{
    padding: 0;
    height: 0;
    transition: all .3s;
  }
  .faq-item-content div{
    padding: 20px;
    padding-top: 0;
  }
</style>