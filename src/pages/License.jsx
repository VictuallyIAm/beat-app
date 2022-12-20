import React, { useState } from 'react'
import styles from '../styles/License.module.scss'
import Modal from '../components/Modal'

const License = () => {
  const [modalOne, setModalOne] = useState(false)
  const [modalTwo, setModalTwo] = useState(false)
  const [modalThree, setModalThree] = useState(false)
  const [modalFour, setModalFour] = useState(false)
  return (
    <div>
      <div className={styles.table}>
        <div className={styles.item}>
          <div className={styles.upperOne}>
            <span className={styles.head}>Basic License</span>
            <span className={styles.cost}>$19.95</span>
            <span className={styles.head}>Standard MP3 Lease</span>
            <span>
              <ul>
                <li>• HQ MP3 (320kbps)</li>
                <li>• Untagged Mp3 File sent instantly</li>
                <li>• Sell up to 2500 Units</li>
                <li>• Up to 100,000 Streams</li>
                <li>• Commercial Use</li>
                <li>• Spotify, Apple, iTunes, etc</li>
                <li>
                  • Baby Montaigne maintains full ownership of the instrumental
                </li>
              </ul>
            </span>
          </div>
          <span>
            <button className={styles.btn} onClick={() => setModalOne(true)}>
              Read license
            </button>
          </span>
          <span>Bulk deals:</span>
          <span>
            <ul>
              <li>BUY 2, GET 1 FREE</li>
              <li>BUY 3, GET 2 FREE</li>
              <li>BUY 4, GET 3 FREE</li>
            </ul>
          </span>
        </div>
        <div className={styles.item}>
          <div className={styles.upperOne}>
            <span className={styles.head}>Basic PRO</span>
            <span className={styles.cost}>$29.99</span>
            <span className={styles.head}>High Quality WAV Lease</span>
            <span>
              <ul>
                <li>• WAV + MP3</li>
                <li>• Untagged Files sent instantly</li>
                <li>• Sell up to 5000 Units</li>
                <li>• Up to 200,000 Streams</li>
                <li>• Commercial Use</li>
                <li>• Spotify, Apple, iTunes, etc</li>
                <li>
                  • Baby Montaigne maintains full ownership of the instrumental
                </li>
              </ul>
            </span>
          </div>
          <span>
            <button className={styles.btn} onClick={() => setModalTwo(true)}>
              Read license
            </button>
          </span>
          <span>Bulk deals:</span>
          <span>
            <ul>
              <li>BUY 2, GET 1 FREE</li>
              <li>BUY 3, GET 2 FREE</li>
              <li>BUY 4, GET 3 FREE</li>
            </ul>
          </span>
        </div>
        <div className={styles.item}>
          <div className={styles.upperOne}>
            <span className={styles.head}>Unlimited</span>
            <span className={styles.cost}>$74.99</span>
            <span className={styles.head}>
              MP3 + WAV + STEMS. FULL Distribution + Monetization Rights
            </span>
            <span>
              <ul>
                <li>• MP3 + WAV + STEMS</li>
                <li>• Full Commercial Use</li>
                <li>• Good if you think the song will blow up</li>
                <li>• Unlimited Streams, Sales, Radio Stations, etc</li>
                <li>• Spotify, Apple, iTunes, etc</li>
                <li>
                  • Baby Montaigne maintains full ownership of the instrumental
                </li>
                <li>• Lease lasts forever</li>
              </ul>
            </span>
          </div>
          <span>
            <button className={styles.btn} onClick={() => setModalThree(true)}>
              Read license
            </button>
          </span>
          <span>Bulk deals:</span>
          <span>
            <ul>
              <li>BUY 2, GET 1 FREE</li>
              <li>BUY 3, GET 2 FREE</li>
              <li>BUY 4, GET 3 FREE</li>
            </ul>
          </span>
        </div>
        <div className={styles.item}>
          <div className={styles.upperOne}>
            <span className={styles.head}>Exclusive License</span>
            <span className={styles.cost}>$249.99</span>
            <span className={styles.head}>
              By purchasing you will get the exclusive rights to the beat
            </span>
            <span>
              <ul>
                <li>• Untagged Mp3 + WAV + Trackouts sent instantly</li>
                <li>• Sell unlimited Units</li>
                <li>• Unlimited Use for Itunes,Spotify,Soundcloud etc.</li>
                <li>• Buyer owns full ownership of the instrumental</li>
                <li>• Instrumental removed from website</li>
              </ul>
            </span>
          </div>
          <span>
            <button className={styles.btn} onClick={() => setModalFour(true)}>
              Read license
            </button>
          </span>
        </div>
      </div>
      <Modal isModalOpen={modalOne} setIsModalOpen={setModalOne}>
        <h1> License preview</h1>
        <p className={styles.p}>
          This Non-Exclusive Basic License License Agreement (the “Agreement”),
          having been made on and effective as of Wed, 07 Dec 2022 02:21:09
          -0500 (the “Effective Date”) by and between Producer Name p/k/a
          Montaigne Beats (the “Producer” or “Licensor”); and Licensee residing
          at [N/A] (“You” or “Licensee”), sets forth the terms and conditions of
          the Licensee`s use, and the rights granted in, the Producer`s
          instrumental music file entitled The Beat Title (Contract Preview
          Only) (the “Beat”) in consideration for Licensee`s payment of $19.95
          (the “License Fee”), on a so-called “Basic License” basis. This
          Agreement is issued solely in connection with and for Licensee's use
          of the Beat pursuant and subject to all terms and conditions set forth
          herein. License Fee: The Licensee to shall make payment of the License
          Fee to Licensor on the date of this Agreement. All rights granted to
          Licensee by Producer in the Beat are conditional upon Licensee`s
          timely payment of the License Fee. The License Fee is a one-time
          payment for the rights granted to Licensee and this Agreement is not
          valid until the License Fee has been paid. Delivery of the Beat:
          Licensor agrees to deliver the Beat as a high-quality MP3, as such
          terms are understood in the music industry. Licensor shall use
          commercially reasonable efforts to deliver the Beat to Licensee
          immediately after payment of the License Fee is made. Licensee will
          receive the Beat via email, to the email address Licensee provided to
          Licensor. Term: The Term of this Agreement shall be ten (10) years and
          this license shall expire on the ten (10) year anniversary of the
          Effective Date. Use of the Beat: In consideration for Licensee`s
          payment of the License Fee, the Producer hereby grants Licensee a
          limited non-exclusive, nontransferable license and the right to
          incorporate, include and/or use the Beat in the preparation of one (1)
          new song or to incorporate the Beat into a new piece of instrumental
          music created by the Licensee. Licensee may create the new song or new
          instrumental music by recording his/her written lyrics over the Beat
          and/or by incorporating portions/samples of the Beat into pre-existing
          instrumental music written, produced and/or owned by Licensee. The new
          song or piece of instrumental music created by the Licensee which
          incorporates some or all of the Beat shall be referred to as the “New
          Song”. Permission is granted to Licensee to modify the arrangement,
          length, tempo, or pitch of the Beat in preparation of the New Song for
          public release. This License grants Licensee a worldwide,
          non-exclusive license to use the Beat as incorporated in the New Song
          in the manners and for the purposes expressly provided for herein,
          subject to the sale restrictions, limitations and prohibited uses
          stated in this Agreement. Licensee acknowledges and agrees that any
          and all rights granted to Licensee in the Beat pursuant to this
          Agreement are on a NON-EXCLUSIVE basis and Producer shall continue to
          license the Beat upon the same or similar terms and conditions as this
          Agreement to other potential third-party licensees. The New Song may
          be used for any promotional purposes, including but not limited to, a
          release in a single format, for inclusion in a mixtape or free
          compilation of music bundled together (EP or album), and/or
          promotional, non-monetized digital streaming; Licensee may perform the
          song publicly for-profit performances and for an Unlimited non-profit
          performances, including but not limited to, at a live performance
          (i.e. concert, festival, nightclub etc.), on terrestrial or satellite
          radio, and/or on the internet via third-party streaming services
          (Spotify, YouTube, iTunes Radio etc.). The New Song may be played on 2
          terrestrial or satellite radio stations; The Licensee may use the New
          Song in synchronization with One (1) audiovisual work no longer than
          five (5) minutes in length (a “Video”). In the event that the New Song
          itself is longer than five (5) minutes in length, the Video may not
          play for longer than the length of the New Song. The Video may be
          broadcast on any television network and/or uploaded to the internet
          for digital streaming and/or free download by the public including but
          not limited to on YouTube and/or Vevo. Producer grants no other
          synchronization rights to Licensee; The Licensee may make the New Song
          available for sale in physical and/or digital form and sell 2000
          downloads/physical music products and are allowed 500000 monetized
          audio streams, 1 monetized video streams, 500000 non-monetized video
          streams and are allowed Unlimited free downloads. The New Song may be
          available for sale as a single and/or included in a compilation of
          other songs bundled together by Licensee as an EP or a full-length
          Album. The New Song may be sold via digital retailers for permanent
          digital download in mp3 format and/or physical format, including
          compact disc and vinyl records. For clarity and avoidance of doubt,
          the Licensee does NOT have the right to sell the Beat in the form that
          it was delivered to Licensee. The Licensee must create a New Song (or
          instrumental as detailed above) for its rights under this provision to
          a vest. Any sale of the Beat in its original form by Licensee shall be
          a material breach of this Agreement and the Licensee shall be liable
          to the Licensor for damages as provided hereunder. Subject to the
          Licensee`s compliance with the terms and conditions of this Agreement,
          Licensee shall not be required to account or pay to Producer any
          royalties, fees, or monies paid to or collected by the Licensee
          (expressly excluding mechanical royalties), or which would otherwise
          be payable to Producer in connection with the use/exploitation of the
          New Song as set forth in this Agreement. Restrictions on the Use of
          the Beat: Licensee hereby agrees and acknowledges that it is expressly
          prohibited from taking any action(s) and from engaging in any use of
          the Beat or New Song in the manners, or for the purposes, set forth
          below: The rights granted to Licensee are NON-TRANSFERABLE and that
          Licensee may not transfer or assign any of its rights hereunder to any
          third-party; The Licensee shall not synchronize, or permit third
          parties to synchronize, the Beat or New Song with any audiovisual
          works EXCEPT as expressly provided for and pursuant to Paragraph
          4(b)(iii) of this Agreement for use in one (1) Video. This restriction
          includes, but is not limited to, use of the Beat and/or New Song in
          television, commercials, film/movies, theatrical works, video games,
          and in any other form on the Internet which is not expressly permitted
          herein. The Licensee shall not have the right to license or sublicense
          any use of the Beat or of the New Song, in whole or in part, for any
          so-called “samples”. Licensee shall not engage in any unlawful
          copying, streaming, duplicating, selling, lending, renting, hiring,
          broadcasting, uploading, or downloading to any database, servers,
          computers, peer to peer sharing, or other file-sharing services,
          posting on websites, or distribution of the Beat in the form, or a
          substantially similar form, as delivered to Licensee. Licensee may
          send the Beat file to any individual musician, engineer, studio
          manager or other people who are working on the New Song. THE LICENSEE
          IS EXPRESSLY PROHIBITED FROM REGISTERING THE BEAT AND/OR NEW SONG WITH
          ANY CONTENT IDENTIFICATION SYSTEM, SERVICE PROVIDER, MUSIC
          DISTRIBUTOR, RECORD LABEL OR DIGITAL AGGREGATOR (for example TuneCore
          or CDBaby, and any other provider of user-generated content
          identification services). The purpose of this restriction is to
          prevent you from receiving a copyright infringement takedown notice
          from a third party who also received a non-exclusive license to use
          the Beat in a New Song. The Beat has already been tagged for Content
          Identification (as that term is used in the music industry) by
          Producer as a pre-emptive measure to protect all interested parties in
          the New Song. If you do not adhere to this policy, you are in
          violation of the terms of this License and your license to use the
          Beat and/or New Song may be revoked without notice or compensation to
          you. As applicable to both the underlying composition in the Beat and
          to the master recording of the Beat: (i) The parties acknowledge and
          agree that the New Song is a “derivative work”, as that term is used
          in the United States Copyright Act; (ii) As applicable to the Beat
          and/or the New Song, there is no intention by the parties to create a
          joint work; and (iii) There is no intention by the Licensor to grant
          any rights in and/or to any other derivative works that may have been
          created by other third-party licensees. Ownership: The Producer is and
          shall remain the sole owner and holder of all rights, title, and
          interest in the Beat, including all copyrights to and in the sound
          recording and the underlying musical compositions written and composed
          by Producer. Nothing contained herein shall constitute an assignment
          by Producer to Licensee of any of the foregoing rights. Licensee may
          not, under any circumstances, register or attempt to register the New
          Song and/or the Beat with the U.S. Copyright Office. The
          aforementioned right to register the New Song and/or the Beat shall be
          strictly limited to Producer. Licensee will, upon request, execute,
          acknowledge and deliver to Producer such additional documents as
          Producer may deem necessary to evidence and effectuate Producer`s
          rights hereunder, and Licensee hereby grants to Producer the right as
          attorney-in-fact to execute, acknowledge, deliver and record in the
          U.S. Copyright Office or elsewhere any and all such documents if
          Licensee shall fail to execute same within five (5) days after so
          requested by Producer. For the avoidance of doubt, you do not own the
          master or the sound recording rights in the New Song. You have been
          licensed the right to use the Beat in the New Song and to commercially
          exploit the New Song based on the terms and conditions of this
          Agreement. Notwithstanding the above, you do own the lyrics or other
          original musical components of the New Song that were written or
          composed solely by you. With respect to the publishing rights and
          ownership of the underlying composition embodied in the New Song, the
          Licensee, and the Producer hereby acknowledge and agree that the
          underlying composition shall be owned/split between them as follows: -
          Licensee, owns 50% of the writers share. - Producer Name, owns 50% of
          the writers share. Producer shall own, control, and administer Fifty
          Percent (50%) of the so-called “Publisher`s Share” of the underlying
          composition. In the event that Licensee wishes to register his/her
          interests and rights to the underlying composition of the New Song
          with their Performing Rights Organization (“PRO”), Licensee must
          simultaneously identify and register the Producer`s share and
          ownership interest in the composition to indicate that Producer wrote
          and owns 50% of the composition in the New Song and as the owner of
          50% of the Publisher`s share of the New Song. The licensee shall be
          deemed to have signed, affirmed and ratified its acceptance of the
          terms of this Agreement by virtue of its payment of the License Fee to
          Licensor and its electronic acceptance of its terms and conditions at
          the time Licensee made payment of the License Fee. Mechanical License:
          If any selection or musical composition, or any portion thereof,
          recorded in the New Song hereunder is written or composed by Producer,
          in whole or in part, alone or in collaboration with others, or is
          owned or controlled, in whole or in part, directly or indirectly, by
          Producer or any person, firm, or corporation in which Producer has a
          direct or indirect interest, then such selection and/or musical
          composition shall be hereinafter referred to as a “Controlled
          Composition”. Producer hereby agrees to issue or cause to be issued,
          as applicable, to Licensee, mechanical licenses in respect of each
          Controlled Composition, which are embodied on the New Song. For that
          license, on the United States and Canada sales, Licensee will pay
          mechanical royalties at one hundred percent (100%) of the minimum
          statutory rate, subject to no cap of that rate for albums and/or EPs.
          For license outside the United States and Canada, the mechanical
          royalty rate will be the rate prevailing on an industry-wide basis in
          the country concerned on the date that this agreement has been entered
          into. Credit: Licensee shall have the right to use and permit others
          to use Producer`s approved name, approved likeness, and other approved
          identification and approved biographical material concerning the
          Producer solely for purposes of trade and otherwise without
          restriction solely in connection with the New Song recorded hereunder.
          Licensee shall use best efforts to have Producer credited as a
          “producer” and shall give Producer appropriate production and
          songwriting credit on all compact discs, record, music video, and
          digital labels or any other record configuration manufactured which is
          now known or created in the future that embodies the New Song created
          hereunder and on all cover liner notes, any records containing the New
          Song and on the front and/or back cover of any album listing the New
          Song and other musician credits. The licensee shall use its best
          efforts to ensure that Producer is properly credited and Licensee
          shall check all proofs for the accuracy of credits, and shall use its
          best efforts to cure any mistakes regarding Producer's credit. In the
          event of any failure by Licensee to issue the credit to Producer,
          Licensee must use reasonable efforts to correct any such failure
          immediately and on a prospective basis. Such credit shall be in the
          substantial form: “Produced by Montaigne Beats”. Licensor`s Option:
          Licensor shall have the option, at Licensor`s sole discretion, to
          terminate this License at any time within three (3) years of the date
          of this Agreement upon written notice to Licensee. In the event that
          Licensor exercises this option, Licensor shall pay to Licensee a sum
          equal to Two Hundred Percent (200%) of the License Fee paid by
          Licensee. Upon Licensor`s exercise of the option, Licensee must
          immediately remove the New Song from any and all digital and physical
          distribution channels and must immediately cease access to any streams
          and/or downloads of the New Song by the general public. Breach by
          Licensee: The licensee shall have five (5) business days from its
          receipt of written notice by Producer and/or Producer`s authorized
          representative to cure any alleged breach of this Agreement by
          Licensee. Licensee`s failure to cure the alleged breach within five
          (5) business days shall result in Licensee`s default of its
          obligations, its breach of this Agreement, and at Producer's sole
          discretion, the termination of Licensee`s rights hereunder. If
          Licensee engages in the commercial exploitation and/or sale of the
          Beat or New Song outside of the manner and amount expressly provided
          for in this Agreement, Licensee shall be liable to Producer for
          monetary damages in an amount equal to any and all monies paid,
          collected by, or received by Licensee, or any third party on its
          behalf, in connection with such unauthorized commercial exploitation
          of the Beat and/or New Song. Licensee recognizes and agrees that a
          breach or threatened breach of this Agreement by Licensee give rise to
          irreparable injury to Producer, which may not be adequately
          compensated by damages. Accordingly, in the event of a breach or
          threatened breach by the Licensee of the provisions of this Agreement,
          Producer may seek and shall be entitled to a temporary restraining
          order and a preliminary injunction restraining the Licensee from
          violating the provisions of this Agreement. Nothing herein shall
          prohibit Producer from pursuing any other available legal or equitable
          remedy from such breach or threatened breach, including but not
          limited to the recovery of damages from the Licensee. The Licensee
          shall be responsible for all costs, expenses or damages that Producer
          incurs as a result of any violation by the Licensee of any provision
          of this Agreement. Licensee` obligation shall include court costs,
          litigation expenses, and reasonable attorneys' fees. Warranties,
          Representations, and Indemnification: Licensee hereby agrees that
          Licensor has not made any guarantees or promises that the Beat fits
          the particular creative use or musical purpose intended or desired by
          the Licensee. The Beat, its sound recording, and the underlying
          musical composition embodied therein are licensed to the Licensee “as
          is” without warranties of any kind or fitness for a particular
          purpose. Producer warrants and represents that he has the full right
          and ability to enter into this agreement, and is not under any
          disability, restriction, or prohibition with respect to the grant of
          rights hereunder. Producer warrants that the manufacture, sale,
          distribution, or other exploitation of the New Song hereunder will not
          infringe upon or violate any common law or statutory right of any
          person, firm, or corporation; including, without limitation,
          contractual rights, copyrights, and right(s) of privacy and publicity
          and will not constitute libel and/or slander. Licensee warrants that
          the manufacture, sale, distribution, or other exploitation of the New
          Song hereunder will not infringe upon or violate any common law or
          statutory right of any person, firm, or corporation; including,
          without limitation, contractual rights, copyrights, and right(s) of
          privacy and publicity and will not constitute libel and/or slander.
          The foregoing notwithstanding, Producer undertakes no responsibility
          whatsoever as to any elements added to the New Song by Licensee, and
          Licensee indemnifies and holds Producer harmless for any such
          elements. Producer warrants that he did not “sample” (as that term is
          commonly understood in the recording industry) any copyrighted
          material or sound recordings belonging to any other person, firm, or
          corporation (hereinafter referred to as “Owner”) without first having
          notified Licensee. The licensee shall have no obligation to approve
          the use of any sample thereof; however, if approved, any payment in
          connection therewith, including any associated legal clearance costs,
          shall be borne by Licensee. Knowledge by Licensee that “samples” were
          used by Producer which was not affirmatively disclosed by Producer to
          Licensee shall shift, in whole or in part, the liability for
          infringement or violation of the rights of any third party arising
          from the use of any such “sample” from Producer to Licensee. Parties
          hereto shall indemnify and hold each other harmless from any and all
          third party claims, liabilities, costs, losses, damages or expenses as
          are actually incurred by the non-defaulting party and shall hold the
          non-defaulting party, free, safe, and harmless against and from any
          and all claims, suits, demands, costs, liabilities, loss, damages,
          judgments, recoveries, costs, and expenses; (including, without
          limitation, reasonable attorneys' fees), which may be made or brought,
          paid, or incurred by reason of any breach or claim of breach of the
          warranties and representations hereunder by the defaulting party,
          their agents, heirs, successors, assigns and employees, which have
          been reduced to final judgment; provided that prior to final judgment,
          arising out of any breach of any representations or warranties of the
          defaulting party contained in this agreement or any failure by
          defaulting party to perform any obligations on its part to be
          performed hereunder the non-defaulting party has given the defaulting
          party prompt written notice of all claims and the right to participate
          in the defense with counsel of its choice at its sole expense. In no
          event shall Artist be entitled to seek injunctive or any other
          equitable relief for any breach or non-compliance with any provision
          of this agreement. Miscellaneous: This Agreement constitutes the
          entire understanding of the parties and is intended as a final
          expression of their agreement and cannot be altered, modified, amended
          or waived, in whole or in part, except by written instrument (email
          being sufficient) signed by both parties hereto. This agreement
          supersedes all prior agreements between the parties, whether oral or
          written. Should any provision of this agreement be held to be void,
          invalid or inoperative, such decision shall not affect any other
          provision hereof, and the remainder of this agreement shall be
          effective as though such void, invalid or inoperative provision had
          not been contained herein. No failure by Licensor hereto to perform
          any of its obligations hereunder shall be deemed a material breach of
          this agreement until the Licensee gives Licensor written notice of its
          failure to perform, and such failure has not been corrected within
          thirty (30) days from and after the service of such notice, or, if
          such breach is not reasonably capable of being cured within such
          thirty (30) day period, Licensor does not commence to cure such breach
          within said time period, and proceed with reasonable diligence to
          complete the curing of such breach thereafter. This agreement shall be
          governed by and interpreted in accordance with the laws of the Saint-
          Petersburg RU applicable to agreements entered into and wholly
          performed in said State, without regard to any conflict of laws
          principles. You hereby agree that the exclusive jurisdiction and venue
          for any action, suit or proceeding based upon any matter, claim or
          controversy arising hereunder or relating hereto shall be in the state
          or federal courts located in the Saint- Petersburg RU. You shall not
          be entitled to any monies in connection with the Master(s) other than
          as specifically set forth herein. All notices pursuant to this
          agreement shall be in writing and shall be given by registered or
          certified mail, return receipt requested (prepaid) at the respective
          addresses hereinabove set forth or such other address or addresses as
          may be designated by either party. Such notices shall be deemed given
          when received. Any notice mailed will be deemed to have been received
          five (5) business days after it is mailed; any notice dispatched by
          expedited delivery service will be deemed to be received two (2)
          business days after it is dispatched. YOU ACKNOWLEDGE AND AGREE THAT
          YOU HAVE READ THIS AGREEMENT AND HAVE BEEN ADVISED BY US OF THE
          SIGNIFICANT IMPORTANCE OF RETAINING AN INDEPENDENT ATTORNEY OF YOUR
          CHOICE TO REVIEW THIS AGREEMENT ON YOUR BEHALF. YOU ACKNOWLEDGE AND
          AGREE THAT YOU HAVE HAD THE UNRESTRICTED OPPORTUNITY TO BE REPRESENTED
          BY AN INDEPENDENT ATTORNEY. IN THE EVENT OF YOUR FAILURE TO OBTAIN AN
          INDEPENDENT ATTORNEY OR WAIVER THEREOF, YOU HEREBY WARRANT AND
          REPRESENT THAT YOU WILL NOT ATTEMPT TO USE SUCH FAILURE AND/OR WAIVER
          as a basis to avoid any obligations under this agreement, or to
          invalidate this agreement or To render this agreement or any part
          thereof unenforceable. This agreement may be executed in counterparts,
          each of which shall be deemed an original, and said counterparts shall
          constitute one and the same instrument. In addition, a signed copy of
          this agreement transmitted by facsimile or scanned into an image file
          and transmitted via email shall, for all purposes, be treated as if it
          was delivered containing an original manual signature of the party
          whose signature appears thereon and shall be binding upon such party
          as though an originally signed document had been delivered.
          Notwithstanding the foregoing, in the event that you do not sign this
          Agreement, your acknowledgment that you have reviewed the terms and
          conditions of this Agreement and your payment of the License Fee shall
          serve as your signature and acceptance of the terms and conditions of
          this Agreement.
        </p>
      </Modal>
      <Modal isModalOpen={modalTwo} setIsModalOpen={setModalTwo}>
        <h1> License preview</h1>
        <p className={styles.p}>
          This Non-Exclusive Basic PRO License Agreement (the “Agreement”),
          having been made on and effective as of Wed, 07 Dec 2022 02:22:37
          -0500 (the “Effective Date”) by and between Producer Name p/k/a
          Montaigne Beats (the “Producer” or “Licensor”); and Licensee residing
          at [N/A] (“You” or “Licensee”), sets forth the terms and conditions of
          the Licensee`s use, and the rights granted in, the Producer`s
          instrumental music file entitled The Beat Title (Contract Preview
          Only) (the “Beat”) in consideration for Licensee`s payment of $29.99
          (the “License Fee”), on a so-called “Basic PRO” basis. This Agreement
          is issued solely in connection with and for Licensee's use of the Beat
          pursuant and subject to all terms and conditions set forth herein.
          License Fee: The Licensee to shall make payment of the License Fee to
          Licensor on the date of this Agreement. All rights granted to Licensee
          by Producer in the Beat are conditional upon Licensee`s timely payment
          of the License Fee. The License Fee is a one-time payment for the
          rights granted to Licensee and this Agreement is not valid until the
          License Fee has been paid. Delivery of the Beat: Licensor agrees to
          deliver the Beat as a high-quality MP3 & WAV, as such terms are
          understood in the music industry. Licensor shall use commercially
          reasonable efforts to deliver the Beat to Licensee immediately after
          payment of the License Fee is made. Licensee will receive the Beat via
          email, to the email address Licensee provided to Licensor. Term: The
          Term of this Agreement shall be ten (10) years and this license shall
          expire on the ten (10) year anniversary of the Effective Date. Use of
          the Beat: In consideration for Licensee`s payment of the License Fee,
          the Producer hereby grants Licensee a limited non-exclusive,
          nontransferable license and the right to incorporate, include and/or
          use the Beat in the preparation of one (1) new song or to incorporate
          the Beat into a new piece of instrumental music created by the
          Licensee. Licensee may create the new song or new instrumental music
          by recording his/her written lyrics over the Beat and/or by
          incorporating portions/samples of the Beat into pre-existing
          instrumental music written, produced and/or owned by Licensee. The new
          song or piece of instrumental music created by the Licensee which
          incorporates some or all of the Beat shall be referred to as the “New
          Song”. Permission is granted to Licensee to modify the arrangement,
          length, tempo, or pitch of the Beat in preparation of the New Song for
          public release. This License grants Licensee a worldwide,
          non-exclusive license to use the Beat as incorporated in the New Song
          in the manners and for the purposes expressly provided for herein,
          subject to the sale restrictions, limitations and prohibited uses
          stated in this Agreement. Licensee acknowledges and agrees that any
          and all rights granted to Licensee in the Beat pursuant to this
          Agreement are on a NON-EXCLUSIVE basis and Producer shall continue to
          license the Beat upon the same or similar terms and conditions as this
          Agreement to other potential third-party licensees. The New Song may
          be used for any promotional purposes, including but not limited to, a
          release in a single format, for inclusion in a mixtape or free
          compilation of music bundled together (EP or album), and/or
          promotional, non-monetized digital streaming; Licensee may perform the
          song publicly for-profit performances and for an Unlimited non-profit
          performances, including but not limited to, at a live performance
          (i.e. concert, festival, nightclub etc.), on terrestrial or satellite
          radio, and/or on the internet via third-party streaming services
          (Spotify, YouTube, iTunes Radio etc.). The New Song may be played on 2
          terrestrial or satellite radio stations; The Licensee may use the New
          Song in synchronization with One (1) audiovisual work no longer than
          five (5) minutes in length (a “Video”). In the event that the New Song
          itself is longer than five (5) minutes in length, the Video may not
          play for longer than the length of the New Song. The Video may be
          broadcast on any television network and/or uploaded to the internet
          for digital streaming and/or free download by the public including but
          not limited to on YouTube and/or Vevo. Producer grants no other
          synchronization rights to Licensee; The Licensee may make the New Song
          available for sale in physical and/or digital form and sell 3000
          downloads/physical music products and are allowed 500000 monetized
          audio streams, 1 monetized video streams, 500000 non-monetized video
          streams and are allowed Unlimited free downloads. The New Song may be
          available for sale as a single and/or included in a compilation of
          other songs bundled together by Licensee as an EP or a full-length
          Album. The New Song may be sold via digital retailers for permanent
          digital download in mp3 format and/or physical format, including
          compact disc and vinyl records. For clarity and avoidance of doubt,
          the Licensee does NOT have the right to sell the Beat in the form that
          it was delivered to Licensee. The Licensee must create a New Song (or
          instrumental as detailed above) for its rights under this provision to
          a vest. Any sale of the Beat in its original form by Licensee shall be
          a material breach of this Agreement and the Licensee shall be liable
          to the Licensor for damages as provided hereunder. Subject to the
          Licensee`s compliance with the terms and conditions of this Agreement,
          Licensee shall not be required to account or pay to Producer any
          royalties, fees, or monies paid to or collected by the Licensee
          (expressly excluding mechanical royalties), or which would otherwise
          be payable to Producer in connection with the use/exploitation of the
          New Song as set forth in this Agreement. Restrictions on the Use of
          the Beat: Licensee hereby agrees and acknowledges that it is expressly
          prohibited from taking any action(s) and from engaging in any use of
          the Beat or New Song in the manners, or for the purposes, set forth
          below: The rights granted to Licensee are NON-TRANSFERABLE and that
          Licensee may not transfer or assign any of its rights hereunder to any
          third-party; The Licensee shall not synchronize, or permit third
          parties to synchronize, the Beat or New Song with any audiovisual
          works EXCEPT as expressly provided for and pursuant to Paragraph
          4(b)(iii) of this Agreement for use in one (1) Video. This restriction
          includes, but is not limited to, use of the Beat and/or New Song in
          television, commercials, film/movies, theatrical works, video games,
          and in any other form on the Internet which is not expressly permitted
          herein. The Licensee shall not have the right to license or sublicense
          any use of the Beat or of the New Song, in whole or in part, for any
          so-called “samples”. Licensee shall not engage in any unlawful
          copying, streaming, duplicating, selling, lending, renting, hiring,
          broadcasting, uploading, or downloading to any database, servers,
          computers, peer to peer sharing, or other file-sharing services,
          posting on websites, or distribution of the Beat in the form, or a
          substantially similar form, as delivered to Licensee. Licensee may
          send the Beat file to any individual musician, engineer, studio
          manager or other people who are working on the New Song. THE LICENSEE
          IS EXPRESSLY PROHIBITED FROM REGISTERING THE BEAT AND/OR NEW SONG WITH
          ANY CONTENT IDENTIFICATION SYSTEM, SERVICE PROVIDER, MUSIC
          DISTRIBUTOR, RECORD LABEL OR DIGITAL AGGREGATOR (for example TuneCore
          or CDBaby, and any other provider of user-generated content
          identification services). The purpose of this restriction is to
          prevent you from receiving a copyright infringement takedown notice
          from a third party who also received a non-exclusive license to use
          the Beat in a New Song. The Beat has already been tagged for Content
          Identification (as that term is used in the music industry) by
          Producer as a pre-emptive measure to protect all interested parties in
          the New Song. If you do not adhere to this policy, you are in
          violation of the terms of this License and your license to use the
          Beat and/or New Song may be revoked without notice or compensation to
          you. As applicable to both the underlying composition in the Beat and
          to the master recording of the Beat: (i) The parties acknowledge and
          agree that the New Song is a “derivative work”, as that term is used
          in the United States Copyright Act; (ii) As applicable to the Beat
          and/or the New Song, there is no intention by the parties to create a
          joint work; and (iii) There is no intention by the Licensor to grant
          any rights in and/or to any other derivative works that may have been
          created by other third-party licensees. Ownership: The Producer is and
          shall remain the sole owner and holder of all rights, title, and
          interest in the Beat, including all copyrights to and in the sound
          recording and the underlying musical compositions written and composed
          by Producer. Nothing contained herein shall constitute an assignment
          by Producer to Licensee of any of the foregoing rights. Licensee may
          not, under any circumstances, register or attempt to register the New
          Song and/or the Beat with the U.S. Copyright Office. The
          aforementioned right to register the New Song and/or the Beat shall be
          strictly limited to Producer. Licensee will, upon request, execute,
          acknowledge and deliver to Producer such additional documents as
          Producer may deem necessary to evidence and effectuate Producer`s
          rights hereunder, and Licensee hereby grants to Producer the right as
          attorney-in-fact to execute, acknowledge, deliver and record in the
          U.S. Copyright Office or elsewhere any and all such documents if
          Licensee shall fail to execute same within five (5) days after so
          requested by Producer. For the avoidance of doubt, you do not own the
          master or the sound recording rights in the New Song. You have been
          licensed the right to use the Beat in the New Song and to commercially
          exploit the New Song based on the terms and conditions of this
          Agreement. Notwithstanding the above, you do own the lyrics or other
          original musical components of the New Song that were written or
          composed solely by you. With respect to the publishing rights and
          ownership of the underlying composition embodied in the New Song, the
          Licensee, and the Producer hereby acknowledge and agree that the
          underlying composition shall be owned/split between them as follows: -
          Licensee, owns 50% of the writers share. - Producer Name, owns 50% of
          the writers share. Producer shall own, control, and administer Fifty
          Percent (50%) of the so-called “Publisher`s Share” of the underlying
          composition. In the event that Licensee wishes to register his/her
          interests and rights to the underlying composition of the New Song
          with their Performing Rights Organization (“PRO”), Licensee must
          simultaneously identify and register the Producer`s share and
          ownership interest in the composition to indicate that Producer wrote
          and owns 50% of the composition in the New Song and as the owner of
          50% of the Publisher`s share of the New Song. The licensee shall be
          deemed to have signed, affirmed and ratified its acceptance of the
          terms of this Agreement by virtue of its payment of the License Fee to
          Licensor and its electronic acceptance of its terms and conditions at
          the time Licensee made payment of the License Fee. Mechanical License:
          If any selection or musical composition, or any portion thereof,
          recorded in the New Song hereunder is written or composed by Producer,
          in whole or in part, alone or in collaboration with others, or is
          owned or controlled, in whole or in part, directly or indirectly, by
          Producer or any person, firm, or corporation in which Producer has a
          direct or indirect interest, then such selection and/or musical
          composition shall be hereinafter referred to as a “Controlled
          Composition”. Producer hereby agrees to issue or cause to be issued,
          as applicable, to Licensee, mechanical licenses in respect of each
          Controlled Composition, which are embodied on the New Song. For that
          license, on the United States and Canada sales, Licensee will pay
          mechanical royalties at one hundred percent (100%) of the minimum
          statutory rate, subject to no cap of that rate for albums and/or EPs.
          For license outside the United States and Canada, the mechanical
          royalty rate will be the rate prevailing on an industry-wide basis in
          the country concerned on the date that this agreement has been entered
          into. Credit: Licensee shall have the right to use and permit others
          to use Producer`s approved name, approved likeness, and other approved
          identification and approved biographical material concerning the
          Producer solely for purposes of trade and otherwise without
          restriction solely in connection with the New Song recorded hereunder.
          Licensee shall use best efforts to have Producer credited as a
          “producer” and shall give Producer appropriate production and
          songwriting credit on all compact discs, record, music video, and
          digital labels or any other record configuration manufactured which is
          now known or created in the future that embodies the New Song created
          hereunder and on all cover liner notes, any records containing the New
          Song and on the front and/or back cover of any album listing the New
          Song and other musician credits. The licensee shall use its best
          efforts to ensure that Producer is properly credited and Licensee
          shall check all proofs for the accuracy of credits, and shall use its
          best efforts to cure any mistakes regarding Producer's credit. In the
          event of any failure by Licensee to issue the credit to Producer,
          Licensee must use reasonable efforts to correct any such failure
          immediately and on a prospective basis. Such credit shall be in the
          substantial form: “Produced by Montaigne Beats”. Licensor`s Option:
          Licensor shall have the option, at Licensor`s sole discretion, to
          terminate this License at any time within three (3) years of the date
          of this Agreement upon written notice to Licensee. In the event that
          Licensor exercises this option, Licensor shall pay to Licensee a sum
          equal to Two Hundred Percent (200%) of the License Fee paid by
          Licensee. Upon Licensor`s exercise of the option, Licensee must
          immediately remove the New Song from any and all digital and physical
          distribution channels and must immediately cease access to any streams
          and/or downloads of the New Song by the general public. Breach by
          Licensee: The licensee shall have five (5) business days from its
          receipt of written notice by Producer and/or Producer`s authorized
          representative to cure any alleged breach of this Agreement by
          Licensee. Licensee`s failure to cure the alleged breach within five
          (5) business days shall result in Licensee`s default of its
          obligations, its breach of this Agreement, and at Producer's sole
          discretion, the termination of Licensee`s rights hereunder. If
          Licensee engages in the commercial exploitation and/or sale of the
          Beat or New Song outside of the manner and amount expressly provided
          for in this Agreement, Licensee shall be liable to Producer for
          monetary damages in an amount equal to any and all monies paid,
          collected by, or received by Licensee, or any third party on its
          behalf, in connection with such unauthorized commercial exploitation
          of the Beat and/or New Song. Licensee recognizes and agrees that a
          breach or threatened breach of this Agreement by Licensee give rise to
          irreparable injury to Producer, which may not be adequately
          compensated by damages. Accordingly, in the event of a breach or
          threatened breach by the Licensee of the provisions of this Agreement,
          Producer may seek and shall be entitled to a temporary restraining
          order and a preliminary injunction restraining the Licensee from
          violating the provisions of this Agreement. Nothing herein shall
          prohibit Producer from pursuing any other available legal or equitable
          remedy from such breach or threatened breach, including but not
          limited to the recovery of damages from the Licensee. The Licensee
          shall be responsible for all costs, expenses or damages that Producer
          incurs as a result of any violation by the Licensee of any provision
          of this Agreement. Licensee` obligation shall include court costs,
          litigation expenses, and reasonable attorneys' fees. Warranties,
          Representations, and Indemnification: Licensee hereby agrees that
          Licensor has not made any guarantees or promises that the Beat fits
          the particular creative use or musical purpose intended or desired by
          the Licensee. The Beat, its sound recording, and the underlying
          musical composition embodied therein are licensed to the Licensee “as
          is” without warranties of any kind or fitness for a particular
          purpose. Producer warrants and represents that he has the full right
          and ability to enter into this agreement, and is not under any
          disability, restriction, or prohibition with respect to the grant of
          rights hereunder. Producer warrants that the manufacture, sale,
          distribution, or other exploitation of the New Song hereunder will not
          infringe upon or violate any common law or statutory right of any
          person, firm, or corporation; including, without limitation,
          contractual rights, copyrights, and right(s) of privacy and publicity
          and will not constitute libel and/or slander. Licensee warrants that
          the manufacture, sale, distribution, or other exploitation of the New
          Song hereunder will not infringe upon or violate any common law or
          statutory right of any person, firm, or corporation; including,
          without limitation, contractual rights, copyrights, and right(s) of
          privacy and publicity and will not constitute libel and/or slander.
          The foregoing notwithstanding, Producer undertakes no responsibility
          whatsoever as to any elements added to the New Song by Licensee, and
          Licensee indemnifies and holds Producer harmless for any such
          elements. Producer warrants that he did not “sample” (as that term is
          commonly understood in the recording industry) any copyrighted
          material or sound recordings belonging to any other person, firm, or
          corporation (hereinafter referred to as “Owner”) without first having
          notified Licensee. The licensee shall have no obligation to approve
          the use of any sample thereof; however, if approved, any payment in
          connection therewith, including any associated legal clearance costs,
          shall be borne by Licensee. Knowledge by Licensee that “samples” were
          used by Producer which was not affirmatively disclosed by Producer to
          Licensee shall shift, in whole or in part, the liability for
          infringement or violation of the rights of any third party arising
          from the use of any such “sample” from Producer to Licensee. Parties
          hereto shall indemnify and hold each other harmless from any and all
          third party claims, liabilities, costs, losses, damages or expenses as
          are actually incurred by the non-defaulting party and shall hold the
          non-defaulting party, free, safe, and harmless against and from any
          and all claims, suits, demands, costs, liabilities, loss, damages,
          judgments, recoveries, costs, and expenses; (including, without
          limitation, reasonable attorneys' fees), which may be made or brought,
          paid, or incurred by reason of any breach or claim of breach of the
          warranties and representations hereunder by the defaulting party,
          their agents, heirs, successors, assigns and employees, which have
          been reduced to final judgment; provided that prior to final judgment,
          arising out of any breach of any representations or warranties of the
          defaulting party contained in this agreement or any failure by
          defaulting party to perform any obligations on its part to be
          performed hereunder the non-defaulting party has given the defaulting
          party prompt written notice of all claims and the right to participate
          in the defense with counsel of its choice at its sole expense. In no
          event shall Artist be entitled to seek injunctive or any other
          equitable relief for any breach or non-compliance with any provision
          of this agreement. Miscellaneous: This Agreement constitutes the
          entire understanding of the parties and is intended as a final
          expression of their agreement and cannot be altered, modified, amended
          or waived, in whole or in part, except by written instrument (email
          being sufficient) signed by both parties hereto. This agreement
          supersedes all prior agreements between the parties, whether oral or
          written. Should any provision of this agreement be held to be void,
          invalid or inoperative, such decision shall not affect any other
          provision hereof, and the remainder of this agreement shall be
          effective as though such void, invalid or inoperative provision had
          not been contained herein. No failure by Licensor hereto to perform
          any of its obligations hereunder shall be deemed a material breach of
          this agreement until the Licensee gives Licensor written notice of its
          failure to perform, and such failure has not been corrected within
          thirty (30) days from and after the service of such notice, or, if
          such breach is not reasonably capable of being cured within such
          thirty (30) day period, Licensor does not commence to cure such breach
          within said time period, and proceed with reasonable diligence to
          complete the curing of such breach thereafter. This agreement shall be
          governed by and interpreted in accordance with the laws of the Saint-
          Petersburg RU applicable to agreements entered into and wholly
          performed in said State, without regard to any conflict of laws
          principles. You hereby agree that the exclusive jurisdiction and venue
          for any action, suit or proceeding based upon any matter, claim or
          controversy arising hereunder or relating hereto shall be in the state
          or federal courts located in the Saint- Petersburg RU. You shall not
          be entitled to any monies in connection with the Master(s) other than
          as specifically set forth herein. All notices pursuant to this
          agreement shall be in writing and shall be given by registered or
          certified mail, return receipt requested (prepaid) at the respective
          addresses hereinabove set forth or such other address or addresses as
          may be designated by either party. Such notices shall be deemed given
          when received. Any notice mailed will be deemed to have been received
          five (5) business days after it is mailed; any notice dispatched by
          expedited delivery service will be deemed to be received two (2)
          business days after it is dispatched. YOU ACKNOWLEDGE AND AGREE THAT
          YOU HAVE READ THIS AGREEMENT AND HAVE BEEN ADVISED BY US OF THE
          SIGNIFICANT IMPORTANCE OF RETAINING AN INDEPENDENT ATTORNEY OF YOUR
          CHOICE TO REVIEW THIS AGREEMENT ON YOUR BEHALF. YOU ACKNOWLEDGE AND
          AGREE THAT YOU HAVE HAD THE UNRESTRICTED OPPORTUNITY TO BE REPRESENTED
          BY AN INDEPENDENT ATTORNEY. IN THE EVENT OF YOUR FAILURE TO OBTAIN AN
          INDEPENDENT ATTORNEY OR WAIVER THEREOF, YOU HEREBY WARRANT AND
          REPRESENT THAT YOU WILL NOT ATTEMPT TO USE SUCH FAILURE AND/OR WAIVER
          as a basis to avoid any obligations under this agreement, or to
          invalidate this agreement or To render this agreement or any part
          thereof unenforceable. This agreement may be executed in counterparts,
          each of which shall be deemed an original, and said counterparts shall
          constitute one and the same instrument. In addition, a signed copy of
          this agreement transmitted by facsimile or scanned into an image file
          and transmitted via email shall, for all purposes, be treated as if it
          was delivered containing an original manual signature of the party
          whose signature appears thereon and shall be binding upon such party
          as though an originally signed document had been delivered.
          Notwithstanding the foregoing, in the event that you do not sign this
          Agreement, your acknowledgment that you have reviewed the terms and
          conditions of this Agreement and your payment of the License Fee shall
          serve as your signature and acceptance of the terms and conditions of
          this Agreement.
        </p>
      </Modal>
      <Modal isModalOpen={modalThree} setIsModalOpen={setModalThree}>
        <h1> License preview</h1>
        <p className={styles.p}>
          This Non-Exclusive Unlimited License Agreement (the “Agreement”),
          having been made on and effective as of Wed, 07 Dec 2022 02:23:11
          -0500 (the “Effective Date”) by and between Producer Name p/k/a
          Montaigne Beats (the “Producer” or “Licensor”); and Licensee residing
          at [N/A] (“You” or “Licensee”), sets forth the terms and conditions of
          the Licensee`s use, and the rights granted in, the Producer`s
          instrumental music file entitled The Beat Title (Contract Preview
          Only) (the “Beat”) in consideration for Licensee`s payment of $74.99
          (the “License Fee”), on a so-called “Unlimited” basis. This Agreement
          is issued solely in connection with and for Licensee's use of the Beat
          pursuant and subject to all terms and conditions set forth herein.
          License Fee: The Licensee to shall make payment of the License Fee to
          Licensor on the date of this Agreement. All rights granted to Licensee
          by Producer in the Beat are conditional upon Licensee`s timely payment
          of the License Fee. The License Fee is a one-time payment for the
          rights granted to Licensee and this Agreement is not valid until the
          License Fee has been paid. Delivery of the Beat: Licensor agrees to
          deliver the Beat as a high-quality MP3, WAV & TRACKSTEMS, as such
          terms are understood in the music industry. Licensor shall use
          commercially reasonable efforts to deliver the Beat to Licensee
          immediately after payment of the License Fee is made. Licensee will
          receive the Beat via email, to the email address Licensee provided to
          Licensor. Term: The Term of this Agreement shall be ten (10) years and
          this license shall expire on the ten (10) year anniversary of the
          Effective Date. Use of the Beat: In consideration for Licensee`s
          payment of the License Fee, the Producer hereby grants Licensee a
          limited non-exclusive, nontransferable license and the right to
          incorporate, include and/or use the Beat in the preparation of one (1)
          new song or to incorporate the Beat into a new piece of instrumental
          music created by the Licensee. Licensee may create the new song or new
          instrumental music by recording his/her written lyrics over the Beat
          and/or by incorporating portions/samples of the Beat into pre-existing
          instrumental music written, produced and/or owned by Licensee. The new
          song or piece of instrumental music created by the Licensee which
          incorporates some or all of the Beat shall be referred to as the “New
          Song”. Permission is granted to Licensee to modify the arrangement,
          length, tempo, or pitch of the Beat in preparation of the New Song for
          public release. This License grants Licensee a worldwide,
          non-exclusive license to use the Beat as incorporated in the New Song
          in the manners and for the purposes expressly provided for herein,
          subject to the sale restrictions, limitations and prohibited uses
          stated in this Agreement. Licensee acknowledges and agrees that any
          and all rights granted to Licensee in the Beat pursuant to this
          Agreement are on a NON-EXCLUSIVE basis and Producer shall continue to
          license the Beat upon the same or similar terms and conditions as this
          Agreement to other potential third-party licensees. The New Song may
          be used for any promotional purposes, including but not limited to, a
          release in a single format, for inclusion in a mixtape or free
          compilation of music bundled together (EP or album), and/or
          promotional, non-monetized digital streaming; Licensee may perform the
          song publicly for-profit performances and for an Unlimited non-profit
          performances, including but not limited to, at a live performance
          (i.e. concert, festival, nightclub etc.), on terrestrial or satellite
          radio, and/or on the internet via third-party streaming services
          (Spotify, YouTube, iTunes Radio etc.). The New Song may be played on 2
          terrestrial or satellite radio stations; The Licensee may use the New
          Song in synchronization with One (1) audiovisual work no longer than
          five (5) minutes in length (a “Video”). In the event that the New Song
          itself is longer than five (5) minutes in length, the Video may not
          play for longer than the length of the New Song. The Video may be
          broadcast on any television network and/or uploaded to the internet
          for digital streaming and/or free download by the public including but
          not limited to on YouTube and/or Vevo. Producer grants no other
          synchronization rights to Licensee; The Licensee may make the New Song
          available for sale in physical and/or digital form and sell Unlimited
          downloads/physical music products and are allowed 500000 monetized
          audio streams, 1 monetized video streams, 500000 non-monetized video
          streams and are allowed Unlimited free downloads. The New Song may be
          available for sale as a single and/or included in a compilation of
          other songs bundled together by Licensee as an EP or a full-length
          Album. The New Song may be sold via digital retailers for permanent
          digital download in mp3 format and/or physical format, including
          compact disc and vinyl records. For clarity and avoidance of doubt,
          the Licensee does NOT have the right to sell the Beat in the form that
          it was delivered to Licensee. The Licensee must create a New Song (or
          instrumental as detailed above) for its rights under this provision to
          a vest. Any sale of the Beat in its original form by Licensee shall be
          a material breach of this Agreement and the Licensee shall be liable
          to the Licensor for damages as provided hereunder. Subject to the
          Licensee`s compliance with the terms and conditions of this Agreement,
          Licensee shall not be required to account or pay to Producer any
          royalties, fees, or monies paid to or collected by the Licensee
          (expressly excluding mechanical royalties), or which would otherwise
          be payable to Producer in connection with the use/exploitation of the
          New Song as set forth in this Agreement. Restrictions on the Use of
          the Beat: Licensee hereby agrees and acknowledges that it is expressly
          prohibited from taking any action(s) and from engaging in any use of
          the Beat or New Song in the manners, or for the purposes, set forth
          below: The rights granted to Licensee are NON-TRANSFERABLE and that
          Licensee may not transfer or assign any of its rights hereunder to any
          third-party; The Licensee shall not synchronize, or permit third
          parties to synchronize, the Beat or New Song with any audiovisual
          works EXCEPT as expressly provided for and pursuant to Paragraph
          4(b)(iii) of this Agreement for use in one (1) Video. This restriction
          includes, but is not limited to, use of the Beat and/or New Song in
          television, commercials, film/movies, theatrical works, video games,
          and in any other form on the Internet which is not expressly permitted
          herein. The Licensee shall not have the right to license or sublicense
          any use of the Beat or of the New Song, in whole or in part, for any
          so-called “samples”. Licensee shall not engage in any unlawful
          copying, streaming, duplicating, selling, lending, renting, hiring,
          broadcasting, uploading, or downloading to any database, servers,
          computers, peer to peer sharing, or other file-sharing services,
          posting on websites, or distribution of the Beat in the form, or a
          substantially similar form, as delivered to Licensee. Licensee may
          send the Beat file to any individual musician, engineer, studio
          manager or other people who are working on the New Song. THE LICENSEE
          IS EXPRESSLY PROHIBITED FROM REGISTERING THE BEAT AND/OR NEW SONG WITH
          ANY CONTENT IDENTIFICATION SYSTEM, SERVICE PROVIDER, MUSIC
          DISTRIBUTOR, RECORD LABEL OR DIGITAL AGGREGATOR (for example TuneCore
          or CDBaby, and any other provider of user-generated content
          identification services). The purpose of this restriction is to
          prevent you from receiving a copyright infringement takedown notice
          from a third party who also received a non-exclusive license to use
          the Beat in a New Song. The Beat has already been tagged for Content
          Identification (as that term is used in the music industry) by
          Producer as a pre-emptive measure to protect all interested parties in
          the New Song. If you do not adhere to this policy, you are in
          violation of the terms of this License and your license to use the
          Beat and/or New Song may be revoked without notice or compensation to
          you. As applicable to both the underlying composition in the Beat and
          to the master recording of the Beat: (i) The parties acknowledge and
          agree that the New Song is a “derivative work”, as that term is used
          in the United States Copyright Act; (ii) As applicable to the Beat
          and/or the New Song, there is no intention by the parties to create a
          joint work; and (iii) There is no intention by the Licensor to grant
          any rights in and/or to any other derivative works that may have been
          created by other third-party licensees. Ownership: The Producer is and
          shall remain the sole owner and holder of all rights, title, and
          interest in the Beat, including all copyrights to and in the sound
          recording and the underlying musical compositions written and composed
          by Producer. Nothing contained herein shall constitute an assignment
          by Producer to Licensee of any of the foregoing rights. Licensee may
          not, under any circumstances, register or attempt to register the New
          Song and/or the Beat with the U.S. Copyright Office. The
          aforementioned right to register the New Song and/or the Beat shall be
          strictly limited to Producer. Licensee will, upon request, execute,
          acknowledge and deliver to Producer such additional documents as
          Producer may deem necessary to evidence and effectuate Producer`s
          rights hereunder, and Licensee hereby grants to Producer the right as
          attorney-in-fact to execute, acknowledge, deliver and record in the
          U.S. Copyright Office or elsewhere any and all such documents if
          Licensee shall fail to execute same within five (5) days after so
          requested by Producer. For the avoidance of doubt, you do not own the
          master or the sound recording rights in the New Song. You have been
          licensed the right to use the Beat in the New Song and to commercially
          exploit the New Song based on the terms and conditions of this
          Agreement. Notwithstanding the above, you do own the lyrics or other
          original musical components of the New Song that were written or
          composed solely by you. With respect to the publishing rights and
          ownership of the underlying composition embodied in the New Song, the
          Licensee, and the Producer hereby acknowledge and agree that the
          underlying composition shall be owned/split between them as follows: -
          Licensee, owns 50% of the writers share. - Producer Name, owns 50% of
          the writers share. Producer shall own, control, and administer Fifty
          Percent (50%) of the so-called “Publisher`s Share” of the underlying
          composition. In the event that Licensee wishes to register his/her
          interests and rights to the underlying composition of the New Song
          with their Performing Rights Organization (“PRO”), Licensee must
          simultaneously identify and register the Producer`s share and
          ownership interest in the composition to indicate that Producer wrote
          and owns 50% of the composition in the New Song and as the owner of
          50% of the Publisher`s share of the New Song. The licensee shall be
          deemed to have signed, affirmed and ratified its acceptance of the
          terms of this Agreement by virtue of its payment of the License Fee to
          Licensor and its electronic acceptance of its terms and conditions at
          the time Licensee made payment of the License Fee. Mechanical License:
          If any selection or musical composition, or any portion thereof,
          recorded in the New Song hereunder is written or composed by Producer,
          in whole or in part, alone or in collaboration with others, or is
          owned or controlled, in whole or in part, directly or indirectly, by
          Producer or any person, firm, or corporation in which Producer has a
          direct or indirect interest, then such selection and/or musical
          composition shall be hereinafter referred to as a “Controlled
          Composition”. Producer hereby agrees to issue or cause to be issued,
          as applicable, to Licensee, mechanical licenses in respect of each
          Controlled Composition, which are embodied on the New Song. For that
          license, on the United States and Canada sales, Licensee will pay
          mechanical royalties at one hundred percent (100%) of the minimum
          statutory rate, subject to no cap of that rate for albums and/or EPs.
          For license outside the United States and Canada, the mechanical
          royalty rate will be the rate prevailing on an industry-wide basis in
          the country concerned on the date that this agreement has been entered
          into. Credit: Licensee shall have the right to use and permit others
          to use Producer`s approved name, approved likeness, and other approved
          identification and approved biographical material concerning the
          Producer solely for purposes of trade and otherwise without
          restriction solely in connection with the New Song recorded hereunder.
          Licensee shall use best efforts to have Producer credited as a
          “producer” and shall give Producer appropriate production and
          songwriting credit on all compact discs, record, music video, and
          digital labels or any other record configuration manufactured which is
          now known or created in the future that embodies the New Song created
          hereunder and on all cover liner notes, any records containing the New
          Song and on the front and/or back cover of any album listing the New
          Song and other musician credits. The licensee shall use its best
          efforts to ensure that Producer is properly credited and Licensee
          shall check all proofs for the accuracy of credits, and shall use its
          best efforts to cure any mistakes regarding Producer's credit. In the
          event of any failure by Licensee to issue the credit to Producer,
          Licensee must use reasonable efforts to correct any such failure
          immediately and on a prospective basis. Such credit shall be in the
          substantial form: “Produced by Montaigne Beats”. Licensor`s Option:
          Licensor shall have the option, at Licensor`s sole discretion, to
          terminate this License at any time within three (3) years of the date
          of this Agreement upon written notice to Licensee. In the event that
          Licensor exercises this option, Licensor shall pay to Licensee a sum
          equal to Two Hundred Percent (200%) of the License Fee paid by
          Licensee. Upon Licensor`s exercise of the option, Licensee must
          immediately remove the New Song from any and all digital and physical
          distribution channels and must immediately cease access to any streams
          and/or downloads of the New Song by the general public. Breach by
          Licensee: The licensee shall have five (5) business days from its
          receipt of written notice by Producer and/or Producer`s authorized
          representative to cure any alleged breach of this Agreement by
          Licensee. Licensee`s failure to cure the alleged breach within five
          (5) business days shall result in Licensee`s default of its
          obligations, its breach of this Agreement, and at Producer's sole
          discretion, the termination of Licensee`s rights hereunder. If
          Licensee engages in the commercial exploitation and/or sale of the
          Beat or New Song outside of the manner and amount expressly provided
          for in this Agreement, Licensee shall be liable to Producer for
          monetary damages in an amount equal to any and all monies paid,
          collected by, or received by Licensee, or any third party on its
          behalf, in connection with such unauthorized commercial exploitation
          of the Beat and/or New Song. Licensee recognizes and agrees that a
          breach or threatened breach of this Agreement by Licensee give rise to
          irreparable injury to Producer, which may not be adequately
          compensated by damages. Accordingly, in the event of a breach or
          threatened breach by the Licensee of the provisions of this Agreement,
          Producer may seek and shall be entitled to a temporary restraining
          order and a preliminary injunction restraining the Licensee from
          violating the provisions of this Agreement. Nothing herein shall
          prohibit Producer from pursuing any other available legal or equitable
          remedy from such breach or threatened breach, including but not
          limited to the recovery of damages from the Licensee. The Licensee
          shall be responsible for all costs, expenses or damages that Producer
          incurs as a result of any violation by the Licensee of any provision
          of this Agreement. Licensee` obligation shall include court costs,
          litigation expenses, and reasonable attorneys' fees. Warranties,
          Representations, and Indemnification: Licensee hereby agrees that
          Licensor has not made any guarantees or promises that the Beat fits
          the particular creative use or musical purpose intended or desired by
          the Licensee. The Beat, its sound recording, and the underlying
          musical composition embodied therein are licensed to the Licensee “as
          is” without warranties of any kind or fitness for a particular
          purpose. Producer warrants and represents that he has the full right
          and ability to enter into this agreement, and is not under any
          disability, restriction, or prohibition with respect to the grant of
          rights hereunder. Producer warrants that the manufacture, sale,
          distribution, or other exploitation of the New Song hereunder will not
          infringe upon or violate any common law or statutory right of any
          person, firm, or corporation; including, without limitation,
          contractual rights, copyrights, and right(s) of privacy and publicity
          and will not constitute libel and/or slander. Licensee warrants that
          the manufacture, sale, distribution, or other exploitation of the New
          Song hereunder will not infringe upon or violate any common law or
          statutory right of any person, firm, or corporation; including,
          without limitation, contractual rights, copyrights, and right(s) of
          privacy and publicity and will not constitute libel and/or slander.
          The foregoing notwithstanding, Producer undertakes no responsibility
          whatsoever as to any elements added to the New Song by Licensee, and
          Licensee indemnifies and holds Producer harmless for any such
          elements. Producer warrants that he did not “sample” (as that term is
          commonly understood in the recording industry) any copyrighted
          material or sound recordings belonging to any other person, firm, or
          corporation (hereinafter referred to as “Owner”) without first having
          notified Licensee. The licensee shall have no obligation to approve
          the use of any sample thereof; however, if approved, any payment in
          connection therewith, including any associated legal clearance costs,
          shall be borne by Licensee. Knowledge by Licensee that “samples” were
          used by Producer which was not affirmatively disclosed by Producer to
          Licensee shall shift, in whole or in part, the liability for
          infringement or violation of the rights of any third party arising
          from the use of any such “sample” from Producer to Licensee. Parties
          hereto shall indemnify and hold each other harmless from any and all
          third party claims, liabilities, costs, losses, damages or expenses as
          are actually incurred by the non-defaulting party and shall hold the
          non-defaulting party, free, safe, and harmless against and from any
          and all claims, suits, demands, costs, liabilities, loss, damages,
          judgments, recoveries, costs, and expenses; (including, without
          limitation, reasonable attorneys' fees), which may be made or brought,
          paid, or incurred by reason of any breach or claim of breach of the
          warranties and representations hereunder by the defaulting party,
          their agents, heirs, successors, assigns and employees, which have
          been reduced to final judgment; provided that prior to final judgment,
          arising out of any breach of any representations or warranties of the
          defaulting party contained in this agreement or any failure by
          defaulting party to perform any obligations on its part to be
          performed hereunder the non-defaulting party has given the defaulting
          party prompt written notice of all claims and the right to participate
          in the defense with counsel of its choice at its sole expense. In no
          event shall Artist be entitled to seek injunctive or any other
          equitable relief for any breach or non-compliance with any provision
          of this agreement. Miscellaneous: This Agreement constitutes the
          entire understanding of the parties and is intended as a final
          expression of their agreement and cannot be altered, modified, amended
          or waived, in whole or in part, except by written instrument (email
          being sufficient) signed by both parties hereto. This agreement
          supersedes all prior agreements between the parties, whether oral or
          written. Should any provision of this agreement be held to be void,
          invalid or inoperative, such decision shall not affect any other
          provision hereof, and the remainder of this agreement shall be
          effective as though such void, invalid or inoperative provision had
          not been contained herein. No failure by Licensor hereto to perform
          any of its obligations hereunder shall be deemed a material breach of
          this agreement until the Licensee gives Licensor written notice of its
          failure to perform, and such failure has not been corrected within
          thirty (30) days from and after the service of such notice, or, if
          such breach is not reasonably capable of being cured within such
          thirty (30) day period, Licensor does not commence to cure such breach
          within said time period, and proceed with reasonable diligence to
          complete the curing of such breach thereafter. This agreement shall be
          governed by and interpreted in accordance with the laws of the Saint-
          Petersburg RU applicable to agreements entered into and wholly
          performed in said State, without regard to any conflict of laws
          principles. You hereby agree that the exclusive jurisdiction and venue
          for any action, suit or proceeding based upon any matter, claim or
          controversy arising hereunder or relating hereto shall be in the state
          or federal courts located in the Saint- Petersburg RU. You shall not
          be entitled to any monies in connection with the Master(s) other than
          as specifically set forth herein. All notices pursuant to this
          agreement shall be in writing and shall be given by registered or
          certified mail, return receipt requested (prepaid) at the respective
          addresses hereinabove set forth or such other address or addresses as
          may be designated by either party. Such notices shall be deemed given
          when received. Any notice mailed will be deemed to have been received
          five (5) business days after it is mailed; any notice dispatched by
          expedited delivery service will be deemed to be received two (2)
          business days after it is dispatched. YOU ACKNOWLEDGE AND AGREE THAT
          YOU HAVE READ THIS AGREEMENT AND HAVE BEEN ADVISED BY US OF THE
          SIGNIFICANT IMPORTANCE OF RETAINING AN INDEPENDENT ATTORNEY OF YOUR
          CHOICE TO REVIEW THIS AGREEMENT ON YOUR BEHALF. YOU ACKNOWLEDGE AND
          AGREE THAT YOU HAVE HAD THE UNRESTRICTED OPPORTUNITY TO BE REPRESENTED
          BY AN INDEPENDENT ATTORNEY. IN THE EVENT OF YOUR FAILURE TO OBTAIN AN
          INDEPENDENT ATTORNEY OR WAIVER THEREOF, YOU HEREBY WARRANT AND
          REPRESENT THAT YOU WILL NOT ATTEMPT TO USE SUCH FAILURE AND/OR WAIVER
          as a basis to avoid any obligations under this agreement, or to
          invalidate this agreement or To render this agreement or any part
          thereof unenforceable. This agreement may be executed in counterparts,
          each of which shall be deemed an original, and said counterparts shall
          constitute one and the same instrument. In addition, a signed copy of
          this agreement transmitted by facsimile or scanned into an image file
          and transmitted via email shall, for all purposes, be treated as if it
          was delivered containing an original manual signature of the party
          whose signature appears thereon and shall be binding upon such party
          as though an originally signed document had been delivered.
          Notwithstanding the foregoing, in the event that you do not sign this
          Agreement, your acknowledgment that you have reviewed the terms and
          conditions of this Agreement and your payment of the License Fee shall
          serve as your signature and acceptance of the terms and conditions of
          this Agreement.
        </p>
      </Modal>
      <Modal isModalOpen={modalFour} setIsModalOpen={setModalFour}>
        <h1> License preview</h1>
        <p className={styles.p}>
          Wed, 07 Dec 2022 02:23:26 -0500 Montaigne Beats -w- Licensee /
          Producer Agreement / "The Beat Title (Contract Preview Only)" The
          following sets forth the material terms and conditions with respect to
          Montaigne Beats ("Producer", "me", "we", or the like) producing
          certain recording(s) embodying the musical performance of Licensee
          ("Artist", "you", "your", or the like). In the event the number of
          master recordings hereunder is no more than one (1), then all
          references to "Masters" hereunder shall be read and deemed to refer to
          one (1) "Master." For good and valuable consideration (the receipt and
          sufficiency of which is hereby acknowledged), the parties hereby agree
          as follows: Product Commitment: Producer shall produce one (1) musical
          composition entitled "The Beat Title (Contract Preview Only)" (the
          "Composition") embodying Artist's featured performance of a
          yet-to-be-titled master recording (the "Master") for delivery to
          Artist for, among other exploitations, the manufacture and
          distribution of records. For the avoidance of doubt, the Composition
          provided by Producer to create the Master shall be solely retained and
          owned by Producer as a pre-existing composition, and the composition
          made by Artist hereunder is a derivative. The territory of this
          agreement shall be the Universe. Artist acknowledges the satisfactory
          delivery, receipt, and acceptance of the Master. Rights: The Master
          (expressly excluding the underlying musical composition), from the
          inception of creation, shall be considered a "work made for hire" for
          Artist (or Artist's designees) within the meaning of the Copyright Act
          of 1976 (Title 17, U.S.C.). If it is determined that any Master does
          not so qualify, then that Master, together with all rights therein
          (including the sound recording copyright(s) but excluding the
          underlying musical composition) shall hereby be deemed transferred to
          Artist. Subject to the terms and conditions contained in this
          agreement, Artist shall have the sole and exclusive right in
          perpetuity and throughout the universe, including, without limitation:
          (i) to manufacture, advertise, sell, license or, otherwise dispose of
          the Master and derivatives derived therefrom in any manner or media
          whatsoever upon such terms, and under such trademarks, as Artist
          elects, or, in Artist's sole discretion, to refrain therefrom; (ii) to
          perform the Master publicly and to permit the public performance
          thereof by any method now or hereafter known; and (iii) to include
          Producer's audio performance in an audio-visual production ("Video").
          Notwithstanding the foregoing, Artist (or its designees) shall have no
          right to make any edits/changes to Producer's composition; no right to
          use Producer's composition apart from the Master; and no right to use
          Producer's composition in a way to imply any sort of endorsement. Fee:
          Artist shall pay to Producer a non-returnable, non-recoupable fee in
          the amount of Two Hundred And Forty-nine Point Ninety-nine, $249.99
          USD (the "Fee"). The Fee shall be payable upon the full execution of
          this agreement. Controlled Compositions: If any selection or musical
          composition, or any portion thereof, recorded in the Masters hereunder
          is written or composed by Producer, in whole or in part, alone or in
          collaboration with others, or is owned or controlled, in whole or in
          part, directly or indirectly, by Producer or any person, firm, or
          corporation in which Producer has a direct or indirect interest, then
          such selection and/or musical composition shall be hereinafter
          referred to as a "Controlled Composition". Producer hereby agrees to
          issue or cause to be issued, as applicable, to Artist, or Artist's
          designees, mechanical licenses (including, without limitation, any
          "first use" mechanical licenses) and other licenses in respect of each
          Controlled Composition subject to the same terms and conditions as are
          applicable to selections and musical compositions written, composed,
          owned, or controlled, in whole or in part, directly or indirectly, by
          Artist, which are embodied on the Master or any recording recorded
          under this agreement. For that license, on the United States and
          Canada sales, Artist will pay mechanical royalties at one hundred
          percent (100%) of the minimum statutory rate, subject to no cap of
          that rate for albums and/or EPs. For license outside the United States
          and Canada, the mechanical royalty rate will be the rate prevailing on
          an industry-wide basis in the country concerned on the date that this
          agreement has been entered into. Producer hereby grants Artist a
          license to reproduce Controlled Compositions that are embodied on the
          Master produced hereunder in synchronization with and in time relation
          to visual images featuring Artist's performances in so-called
          promotional "video programs", on a royalty-free basis and in so-called
          commercial "video programs", in being understood that Producer shall
          be entitled to Producer's pro-rata share of any royalties attributable
          to such commercial "video programs". Upon Artist's request Producer
          shall execute or cause Producer's publishing designee to execute and
          deliver to Artist, as applicable, all documents required by Artist, as
          applicable, to effectuate the purpose of this paragraph. Publishing
          Rights: With respect to the publishing rights and ownership of the
          underlying composition embodied in the Master, the Artist, and the
          Producer hereby acknowledge and agree that the underlying composition
          shall be owned/split between them as follows: - Licensee, owns 100% of
          publishing rights. - Producer Name, owns 0% of publishing rights.
          Credit and Likeness: Artist shall have the right to use and permit
          others to use Producer's approved name, approved likeness, and other
          approved identification and approved biographical material concerning
          the Producer for purposes of trade and otherwise without restriction
          solely in connection with the Masters recorded hereunder. Artist shall
          accord (or shall cause to accord) Producer a credit on (i) labels and
          liner notes of the Master, where applicable, (ii) in all
          configurations (including in applicable meta-data) derived from the
          Master, (iii) in all trade and consumer advertisements, including
          Billboard Magazine strip ads, which pertain exclusively to the Masters
          hereunder, that are one-quarter (1/4) page or larger in size, placed
          directly by Artist, and appear in so-called "nationwide" trade
          publications in the United States. Artist shall ensure that Producer
          is properly credited and Artist shall check all proofs for the
          accuracy of credits, and shall cure any mistakes regarding Producer's
          credit. Such credit shall be in the substantial form: "Produced by
          Montaigne Beats". Warranties, Representations, and Indemnification:
          Producer warrants and represents that he has the full right and
          ability to enter into this agreement, and is not under any disability,
          restriction, or prohibition with respect to the grant of rights
          hereunder. Producer warrants that the manufacture, sale, distribution,
          or other exploitation of the Masters hereunder will not infringe upon
          or violate any common law or statutory right of any person, firm, or
          corporation; including, without limitation, contractual rights,
          copyrights, and right(s) of privacy and publicity and will not
          constitute libel and/or slander. Artist warrants and represents that
          he has the full right and ability to enter into this agreement, and is
          not under any disability, restriction, or prohibition with respect to
          the grant of rights hereunder. Artist warrants that the manufacture,
          sale, distribution, or other exploitation of the Masters hereunder
          will not infringe upon or violate any common law or statutory right of
          any person, firm, or corporation; including, without limitation,
          contractual rights, copyrights, and right(s) of privacy and publicity
          and will not constitute libel and/or slander. The foregoing
          notwithstanding, Producer undertakes no responsibility whatsoever as
          to any elements added to the Masters by Artist, and Artist indemnifies
          and holds Producer harmless for any such elements. Producer warrants
          that he shall not "sample" (as that term is commonly understood in the
          recording industry) any copyrighted material or sound recordings
          belonging to any other person, firm, or corporation (hereinafter
          referred to as "Owner") without first having notified Artist and
          obtaining Artist's consent. Artist shall have no obligation to approve
          the use thereof; however, if approved, any payment in connection
          therewith, including any associated legal clearance costs, shall
          constitute an additional recording cost and expense and shall be borne
          by Artist. Knowledge by Artist that "samples" were used by Producer,
          which was not affirmatively disclosed by Producer to Artist, shall
          shift, in whole or in part, the liability for infringement or
          violation of the rights of any third party arising from the use of any
          such "sample" from Producer to Artist. At Artist's request, Producer
          shall cooperate with respect to any matters concerning "sampling"
          which may arise hereunder. The parties acknowledge that Producer did
          not incorporate any "samples" in the Master hereunder. Artist hereby
          agrees that Producer has not made any guarantees or promises that the
          Master fits the particular creative use or musical purpose intended or
          desired by the Artist. The Master, its sound recording, and the
          Composition embodied therein are delivered to the Artist "as is"
          without warranties of any kind of fitness for a particular purpose.
          Artist further acknowledges and agrees that the Composition produced
          by Producer may previously have been licensed to third parties on a
          non-exclusive basis. Any licenses granted by Producer, which precede
          this agreement, shall remain in effect and shall not be affected by
          this agreement. Artist waives any claims against Producer for any
          pre-existing licenses for the Composition. Artist further agrees that
          Artist will not submit any claims against the third-party licensees
          for their non-exclusive use of the Composition. Parties hereto shall
          indemnify and hold each other harmless from any and all third party
          claims, liabilities, costs, losses, damages or expenses as are
          actually incurred by the non-defaulting party and shall hold the
          non-defaulting party, free, safe, and harmless against and from any
          and all claims, suits, demands, costs, liabilities, loss, damages,
          judgments, recoveries, costs, and expenses; (including, without
          limitation, reasonable outside attorneys' fees), which may be made or
          brought, paid, or incurred by reason of any breach or claim of breach
          of the warranties and representations hereunder by the defaulting
          party, their agents, heirs, successors, assigns and employees, which
          have been reduced to final judgment; provided that prior to final
          judgment, arising out of any breach of any representations or
          warranties of the defaulting party contained in this agreement or any
          failure by defaulting party to perform any obligations on its part to
          be performed hereunder the non-defaulting party has given the
          defaulting party prompt written notice of all claims and the right to
          participate in the defense with counsel of its choice at its sole
          expense. In no event shall Artist be entitled to seek injunctive or
          any other equitable relief for any breach or non-compliance with any
          provision of this agreement. Miscellaneous: This agreement has been
          entered into in the Saint- Petersburg RU and the validity,
          interpretation, and legal effect of this agreement shall be governed
          by the laws of the Saint- Petersburg RU applicable to contracts
          entered into and performed entirely within such State. The courts of
          Saint- Petersburg RU, Saint- Petersburg RU (state and federal) only
          will have jurisdiction of any controversies regarding this agreement
          and the parties hereto consent to the jurisdiction of said courts. All
          notices, statements, and payments to be sent to any party hereunder
          shall be addressed to such party at the applicable address set forth
          on the first page hereof or at such other address as is designated in
          writing by the applicable party from time to time. All notices shall
          be in writing and shall either be served by personal delivery (with a
          written receipt of such delivery) or certified or registered mail,
          return receipt requested, all charges prepaid, except statements may
          be sent by regular U.S. mail. Except as otherwise provided herein,
          notices delivered in accordance with the foregoing shall be deemed
          given when personally delivered, or five (5) days after mailing,
          except that notices of change of address shall be effective only after
          actual receipt. Where approvals are required hereunder, such approval
          or consent shall not be unreasonably withheld and the parties
          acknowledge and agree that email confirmations/responses shall
          suffice. Producer shall not be entitled to any monies in connection
          with the Master(s) other than as specifically set forth herein.
          Producer shall have the right to assign this agreement to any parent,
          subsidiary, or affiliate, or any individual or entity owning or
          acquiring a substantial portion of Producer's stock or assets provided
          that Producer remains secondary liable. Artist may not assign any of
          Artist's rights or obligations hereunder without Producer's prior
          written consent and any such purported assignment shall be null and
          void ab initio. Both parties agree and acknowledge that this agreement
          (a) will be binding upon and inure to the benefit of the parties
          hereto and their respective successors, permitted assigns, heirs,
          estates, administrators, and executors; (b) embodies the sole and
          entire agreement of the parties in respect of, and supersedes all
          prior oral or written understandings between them concerning the
          subject matter hereof; and (c) may not be amended except by a written
          instrument signed by all parties hereto. A waiver by either party
          hereto of any provision of this agreement in any instance shall not be
          deemed to be a waiver for the future. All remedies, rights,
          undertakings, and obligations contained in this agreement shall be
          cumulative and none of them shall be in limitation of any other
          remedy, right, undertaking, or obligation of either party. Any breach
          by either party shall not be deemed material unless, within thirty
          (30) days (or fifteen (15) days for failure to pay monies owed) after
          the non-breaching party learns of such breach, the non-breaching party
          serves written notice thereof on the breaching party specifying the
          nature of the breach and the breaching party fails to cure such
          breach, if any, within thirty (30) days (15 days regarding payments)
          after receipt of such notice, or within a reasonable time thereafter
          if such breach is not curable within thirty (30) days. In entering
          into this agreement and providing services pursuant hereto, Artist has
          and shall have the status of an independent contractor and nothing
          herein contained shall contemplate or constitute Artist as Producer's
          agent or employee. ARTIST UNDERSTANDS THAT ARTIST HAS THE RIGHT TO
          SEEK THE ADVICE OF INDEPENDENT COUNSEL CONCERNING ITS RIGHTS, THE
          PROVISIONS HEREOF, AND THE ADVISABILITY OF EXECUTING THIS LEGALLY
          BINDING AGREEMENT. FURTHER, ARTIST ACKNOWLEDGES THAT PRODUCER HAS
          GIVEN ARTIST THE OPPORTUNITY TO SEEK THE ADVICE OF INDEPENDENT COUNSEL
          AND ARTIST ACKNOWLEDGES THAT ARTIST IS EXECUTING THIS AGREEMENT
          VOLUNTARILY AFTER CONSULTATION WITH INDEPENDENT COUNSEL OR
          INTENTIONALLY DECIDING NOT TO SEEK ADVICE OF INDEPENDENT COUNSEL. This
          agreement may be executed via facsimile and in two or more
          counterparts, each of which shall be deemed an original, but all of
          which shall constitute one instrument. In addition, a signed copy of
          this agreement transmitted by facsimile, by digital signature, or
          scanned into an image file and transmitted via email shall, for all
          purposes, be treated as if it was delivered containing an original
          manual signature of the party whose signature appears thereon and
          shall be binding upon such party as though an originally signed
          document had been delivered.
        </p>
      </Modal>
    </div>
  )
}

export default License
