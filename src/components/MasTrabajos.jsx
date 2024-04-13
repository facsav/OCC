import assets from "../assets/assets"
import { Trabajos } from "./Trabajos"
import data from "../utils/pools";

export function MasTrabajos(){
    return(
        <div style={{paddingTop:'8rem'}} class="container-trabajos" >
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczM2B8pGfY3gdIjpXXkzV7Of28mfwjWaazAj22mJ7Mp-AxtgFbULrE24DM5EcOqsGa7saln60Tr1z_SQfbCEYHGF2CHoWcXx8maXChzvsg6CjTRglChzVgzTWcnrUYQweiqSWH1jv7NEn_hpguLiY2SO5A=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOjMeiD9V8MDPWL0Sg_LjxXFlcTnTa_IsuOqgPGEPAmhY1aK8Trj22EmmCcaW_KlLieuvu-w8X9l6g8VkV38RPtUAZWhmSxMe8hGIY_Wd98ow_fX7U5kWpJ6f1MA7XWBPm4AG9shI-xAKy6T288vbNRcQ=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOGpMe9mC1eif0RRHaguM2aVcLy0GclV_K25vpFY7i3VynLQEVmc2JI2oqzBi1ERS9gpsVPwwfyirBUDM35oR5z0oBrEGHg6cLK8ZJHiACu2nWJm1--bkzZ-ttV6WWzcYlBwm_cPfpnDtDhnTS8f7bpeQ=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNjNKAXuc_0ys-0PojIfUpa94J193Nf2gAD4pqRYF3_2BTNfThieCALN6j8iMWLdjTM6VSBR8rXvWkcCSDm9sHQ06qGgtaMFA5KdxHQNe_kDT2TxZGfTiGs-GHol_5WrZdFlW8XSqbnnzI3YTdpj3ZqMA=w855-h641-s-no-gm'

            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczN7DVS0bjKXSpujRKp4ry0heEpoXoaYMm7Rn5z5ytOT6LVNjtLSQSeoFm8K6wF__ciTJEwJ70DxthIHK1b_JgdmJ7I7PrtBEWvIYXLtQAT8p_FjGOSZmUWDoy-th20u1qiXOc1uPRZWP_rVwD_gCrkpPA=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczO1gcYzpaEDloz44XZryPlEvWPgFQp0q6tu9oNv7hhqQmJhDxFcjPZTgSw4rF4tNaaGm0W8bhzZ0e2uhI2Ea4T4bwUvNiXuQmbKX4lANv1WIqyYkIRYsKNt5JOeNi-WdmV5c6YVE4VB-e_fySvCC25ghQ=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczN4WQLmKbPe3HBhRsxTMG-5goFkAlAaT1xpfepaooH_y8VoPhYpPw9n6lpVy-LlQeEIuQehzuzAJ8kaH3UaQ0vh_mZaHOgQufDSO-S-HFTcTfqvqSh5a9PYBjLS_mH8YVa_-BEMS_oNHaSx9tQoVyVejQ=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOPU769rdRpFO--UtkUCb1gL8ZGoPQb4ORkJSDFWATdTcRI2BeHTBO68bxzfpi4jvRYcCiRr12aNkLRGikK_yAx4BjKSN4x-8Qq7A5VKfepmVViSW6_sqkHtkhFIxzTgmowBAkWJ7Cei7ari9tIN4A6nw=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMFsv0wST4DpOPSiGopNpQvnBj-BohDxTnfPV9FSIeeyd0u4i8Kk5oJbKT4R5h30vqjkMBJCCbZHQH8HsjI-NtbWAMsoSAg4ABKCmfLPC2ObThCqwX3bSitPcUkxCFRLqYYgZ6yTIgN-9rEwf-AWnEcsw=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczN-8JWWnkoORFV89v3TmXUi_Um4dOilGAgNzfGRagU50tvRStk9PgZ-YoD4GC8JyP9sb56Sv1Z1-B1hKvRtgpEBjvscFvH-F_a3RLKnJVUfoKnE_7oLonJo9fVQcJyr36h0dCENXhfdMP66SOnSrGOKyQ=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOnkkGisZe2lX6_A996tYd79mb-os69pUN1-gwpbky8MB_EyS5aq4-V2DzUSUL36mOwHnG73u4Bf6HXZO_sV_43zbIQppyIQhEJa5KCnCD3Ek-J0uq1NYEmicFlNEAsFBhk6zDWpF8mq1nUnIxcxFPNFA=w481-h641-s-no-gm'

              ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczMOU2LmnNA8ndk5_wTduOlVeRg5HbHyMmm1NrA2UQT1kw-oh11bjF_7aFRtxYNFhWiG19DRbsqdSmMcwc5CZqAJyJhVaduf5MRaR0rsu_WDnGGORZ9yDsJRZiYnA3Y3lM54OPKfubMq-cl7cY96oIFeeA=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczN86t8ye5AdkVtERcWP4m427P300PA5TqX2JgjTf7ttDO1YrxG7IpgxWI9Apq4y24BlG--rF4MQv5_odYNTh4i_ypHZVv-cnMssXBjd12ygwlgu5ovdSEVGLxxAmPDczIOH3sgqVXrTNe0SM22pbDBhgQ=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOfzK3s6RJyZVmVU3_0n-ADw38xS_eKU0Y7xuprjz9p5ELWVLvhKJkfe9XiC9ekA62ZFX60BAvMkrk30xus2McTnMuUL-xu2uJmS2fGgleQVvMWf3OmN4LNF62YOxeAu6Yydp-xsN3FAuGTrP8wJ7pVLg=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMkGIyD9iCd7ADR1LgaQrnXQ9NqtxbigCOwJ2WWDoVm1JeGRdzY2_hMJErdo4fD_ZTmNVd1FkTjV7Y_OtTh8_Vp4tcWRwZkivndJ4Vg1ys8Lc8mIerRmDRNPANjDiA0U_Cb1x68j_2671ffYwo1X5ejaA=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPe_upFTybP6EaK7UUGQzNluRvRW6v71qMTZFCVdXlCuH_jtRYrNNp_D7lCEm5BmN2bZ8GL_dCskjCTDplFr_7oP9gKm9its8IUEL79hwcotH8JL8HUjLxQXdcPQn0JlalId3pw67g_Q1ZCBC2OWWgDmw=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNL6biiijJlrY_osDHYLtCOdXRN9rzOqNBV1COMUolmiVrfkb5OPzrWNScmsRzpGyoQhJmOq5Bv9TFZDg0w8gStv2q8_O50E2JjNeBT0QbvQ73VsLqUU3KDRAphVQ4VeF2W9vm7Dh5gNHTbwDnYHu1nQg=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPGFrrgsb0jmWjNOe-GQtvxIRhFJpw7yBKYyd9KBa2H6zot-fIadVRGN4NHLsCX7GzUVwBMw-xSw6FjNu0-UWFYWzMuZA-JA1OREfiHETyn3CJiZ_k0eqSI0rpmPMGT0gVZWVpx3lN5iGVCWI_aCss13w=w481-h641-s-no-gm'
              ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczP5RWDXMGbK6lXOxL5VWEC8OoAj8Rmpd6SbRJHRyndMEfnjwc6HnRG26JqEcaCYdDPvqWKea4swYfjhYumcYMufR7dGpJvcpEuAe8SllX4wKklgpTQ-g6mk-rWMu-OJxkZvUW2pcoT-49lKXkk39FToQQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczN_uSfCTvnp_36bAMetpolWVsxmgTep6Tv2gCOhMGQuQP3MI31j0pBgGM8BtWIdMHDK6C0ytPxoIkgzu25othM1PMznAUvdq-5GkM5GNMqA7mRJOQcjXycbS0ne2lQBJAaBC43hmCy9KJgwywb3C7X07Q=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczO3iJRH-_rm0VmsdFr0d4nJV2GyOg-Vtt0LQiPMBnOE84HHfwZJWsGvH2uxTmGzt3qX7rJ-8LTLwJ_deIJhoh0BEwcNgzKpzYifiFTSFLjGgSyVq-2l0-9rum3PQ919CFjX_41M-0JAPFeJIlkCEO4zSw=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczOWr-l05aXTcdXJR4LQdEc2i4zPzkpCUGJgdUCaMh5VqdAvNanY0n_0OByx2DJmcGTQI0lBOmi3PIGBWq7wkdj3DjRahyejVuA0JsfCAz5XnTitpcohb0UogA33IC24VUFlEtR6pwavxoIes1kPWXGlsA=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczP5HGIjwWtz9gAbN7XvJO4yNsVKsaPVndcpdaHC4Cirom7E7iFYq_v6KWSse0P8eiepjlmBFlHdjGdGeHyE13Bvn6oqUUmEtJiynv0EesLLe17lbSkVYxudM3kuOvk_0zuICCjL0_5pS3woRiLtivARXg=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczMoiG6InNdfyjy2G4xc78d8it0NJeMs5t9vrVXckC2cwp0QChykPUeMXDzUyJslaWw-9mHKbBTD0Rv36-BHav1G_8HNQCtvYkodwMFh-XwF4vu92A3aPeQsjqgub80M0DRJ1ZBsmzdp5Hf5WVvB0Ygjuw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMnLG3S2ipyKFbLjl0a1EUkLbFTeOET3fMuPR1vc10uZRnyEXPjg1DGyimPf3tv5BMZBYn-cPRwdP-8meHiFSfDQ4IxQ4-ahioxHexYRfHm3rN3PbBRN5kzrf2vJsQf0lc6G7bOF0jMtPbZN4h-FKH1Lw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMkA7OLzbXcQ-saBkKft-v_i3eLrCEALNsWuQQooQfoqRqguTVAs4z_PW_ErYRk0ebAuwA7GlcF_oIbPA3Fyo2TB0aZo9Y2w20ukIqjUCgl5vNSF6P1RNOx8t_iWg3QXv-xVbGXuhKRgwcCSMLJPNj4-w=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPliF3CSPZ50GKQm0h-py3yP89zuWwnJY-GSn5Y1XHc_tLlnS-IPAsCrG_GtVzzaWwM5aV_dIZ4BhhZE-ruHStkopcga56jQNAkwiNXfTFlXfPAFWeKo1XfOy19kMNA5XzbSpTi4eM5ZrqKDMA8R-7NfA=w1140-h641-s-no-gm'
              ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczP8Unt-StOiwFHVZ1J4eiaKu1T21nl_oLPHFEds7DrlCweg9HDNrGCz_FckMAPrLtED8iBW42tHGLj7d2J9x9XscqquRL8DgUZprcV-FAgK7VrEDe9PmXPw3PoO-UCrZrA6UPTxYZlI0sQCrCq5fa6feQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOO5jcv6pyl_GdADhBwMtDgUvGHQMfBd1VWxYt85yTR8WTJQ_KHZUvXhWQHxACB5K5xhc48CeAYOFhQeMsqJWtxVQHvNE4KXquwu8v-WIPlrFbPhn9oI4cKZdnYCFelMaKjhQCiczFIxujvpEhCWna5Vg=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPMc_2UIlDxY7Va6p2eB54umpPOawDRSiytBafNyF3mMHBCfUg5rHB3NgiNIK9B8LU7dtEOWit5DybmRxgdOaKrvB1P_cnTtJUm8KOeD1o4HpvUt3GViJlPhnPt0b_o08s-1SEPLt61qlWvWrhOuaTV9g=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczM7eq1kdu6tjZLJuyO0f1-wDwrEWWfb4vifLIrep6PhZWrcMdSU8sWUBcKkJ-aVz7QG-E0GSxK_pQQ2xqoXVXhOzXmCtIZxFzpsMoedT742BdUUJezw8AnFwVrB9diFQMugl1SMp2Ws3Hj2dnTXEHlfGQ=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczN-0rhWk7MIHYVyRky6T2AteK1y9deM4LHQQ9rCMZRRrRhW4k5m0ydxQavlRILyQIAkn06_rsoPSBcNvGt3mDN60USo_ksfU29gbZjfzlD0YdjXuZPsJ9-6CVCFg-vv3aS9qoAfNiEf7wSQL4t7nINM2w=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczM275rwjH7Csg6IDr0DtUJdne5pspZY8G9zBSEYyR4ZoVGTcNyvkg2Rya75i7eI7F79LR7YtOMacwYZFXAlduVZP1PQf_O0LxYRRqauhcikiIagvleMVxH0P1jME4yunzNBErv3kUMs7IioVa2WGA0Tzg=w360-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNoEQd5_Oo4VQrJ_EqCM3_rgfnzrB4byYULrIKyCwaIVzAL9lagfJP1rms4WW9_RduQj4CGQ_dlEeYa8LDj36zYmyqzXaDVWz54XFSJRamGPj8Wl1OnNi7r0KBsEdMMQqUtCF6gZeg34AZjsPKKKWOd0g=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMqKYnxa5kh2xI4zH3NTA514tE0CP-KSSZPK9ENqo_ss3oDqWiZz1xgT10_iw_pI710NPOJ9woGhCG2kFRWVoBm2awTNXywonMpl57aLT2SJJ5t2GK8p-pg4zfZnC6bTlu-9yYjwzHNK6-KB6UPH2Bb6Q=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMDgZ33-yi6gaFwtBYcw-qDKKc-ikpO_99rj2kGZPObptSyK1rDRuViESEm3UP9Ec1SDeiZWOr436oK_AY6Za4Bo9X-ub7zQZrzBsBW6f-RJ_GCSrNrTw1n5w2rMDcjNwkTbPKZxtH-XJl9Q09PeodaJw=w1140-h641-s-no-gm'

            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczOzSYAOjQ9bsyEFN9F7V7i11PPOg0mztPOLoDJIkJQ_y3KwX43-PNkKTdJ_6aqyO1AlsKlmn8TlLUlzrxlDGksXnwppYulaSiuxPydXimYat4EYZnZdzueYVXzN76qz1dcwH2EG1pUeAGbkzLQ5f0hrUA=w360-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczMC0iG4lJEejXPWhS7m1sEUo66fOCB66SV15LmlbkjRNypjLxcm4CRvucC7R-RKdHpi-XxsPiAez4UZXmC4JtKtK6Hy_Is0cxyyvat2LQjgzBLLeD03jGctbDyQIeF1rElXUZ3e9m0iZsXYtPHuZxU66A=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczO5g2Tlx7FN5N_QbK9zeQghMys3NlYg9xfdtqG7ufmF_0LqHA1Njj77ALH5-J9H7LlYZNZEYHOD9WsdFbLmEnj10IoZ5uHgruGjuiLrnxiseyy4GUTCbpYBb8xSeLEPINDujStKwdnLVqlhSTDzFYslJg=w360-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPwasuvrLa7_RhIueK4Peg9LmnChoyTa9WZU8Zq5wTAvIn6gmMs0RDVGP2WEGSMG2BfJ3fRfqgimxjAve1bGK0Non0vXi0NyouodeliHoJXVPXC0-nA7PWeXXHfeWS_svqKZCQ89MfdYVHwgLwkuMg4uQ=w360-h641-s-no-gm'

            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczNQH9vjePYN5Pgsn-TvD47Ch7F-iaQ1u_UWS37naqiWcO4O_DxJZQAE_Zn7uhaTh4yb9fKlyXHvyJFVONT15lcx1HXa-ONbWSMLgjeHqoOyazsOjeAhEVmAoewOrsXUJBk_o-WQBK_YLYdIOK_GlIVDMA=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPtoUYHlf5c0JCriIuqoWMSHv_ixBvKskMStHHtoDpWicaLsYXRIaio3vvsvMAW8kB8KcZlS-7RbBKmOvkSpn6UnFAj580hXBdUWdZBBhEkkRhCV1w7U71hodH0G5s_Gm9hYVLRjcy04vLyUorgIO7PVg=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMRvq8OjXBTpeWnElcgagOkmA-4dMyiawAGVzM9p7JDgfwKvHK3wAtAFQFJfciPkNAQvFvU3FjeKa5aJlq1bWYKLIr1fS6xcrJ8jw1tGDgp_0LByjFjLzDEHZViPLb7howbAYe9JCJLf5yXPw1VWq1gHQ=w855-h641-s-no-gm'

            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczMAFUBhxkNDWYxNAAQ8yxErl_wWMRb2wmRq13HRFQ6vTaetq4Q6gkxYaCXrvoQDAIYFnyC3kLGEQ3AfEy1cx5VXxfuIQH1M_5U5aZjPUNNs30SZj9WDTdDawL0Q2WWeIGaGzjK0nkNj-mtdCECGqaFN8g=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOrocqYdyv7dJvORrE5q39t0GmDtLDuxNUgfhfvaALRmQdVQXH5mDewXwYe88CDDk9OfQug7fbJEmWux9ON5dIurlTW2EqFacsgkwo1EU0GIybHuYy6Gome_XYfcV1xyvQl8QVQb73q0EjqXLfXsOtsbA=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczNxxIYhCz7KDNA7vMxGJih9RY01-Qyo1pAJSyyu55ZhSZ9BDsRBn1__4c__c7Sl8SXNLMUIbWhUxtBe7VcBlz2G1GXEaUiAe3P5PRqiZUHEq0px37qz0ttmvb9UcUHuycM1_-12AxZZrF6j9tMb_tHKKQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNOW75hIFTuGxTspfgOm15g_AFd42m7aXZ70935b2tvO5ape0n0MUNYzveP4gX1-EsSba4fIi9zMZoE1kKkL1sVfKqdR-8eteoLdDfsILeXV_LMQmc5g6qwfEwH_pa4KPb5EuOC5ZpYyrH2XFjudeHnCw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczO85Dn-IYxBflpkFcbip_6AZ3SsGCw-WKWlKF93qbNOXK2GsUNtHuDJ9ywrzVXtwv5NZ0PHAVhgq0PnVelapaYeBfR11pFRi_SbN4wzdYnSFzRsXcot0hZ3z52uEW3aXlZqvmQ2-SMJeh0objP9TFy53w=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPiRuCfAWOCFcCSrQu4Jz0_CCzFm_-0PG0Y6x6mzB3AI-cWnZaPwBM9vlJ_dSGjm8jmsZ8Vv9vnY5lddjd24x3Bfcoe9IFMOmf-mWvBXMQbC7-lwR-fyI2xxHXXQOKmlJH1kYU3no1gfBYbgBZxcEdoxA=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczO2p_J30XymnU1ugVeekceA0g4vN4sEKfoseHI3mYWKS5yAFMyhfhRDES4UdZw0aGyYU_TIRcocwSihlUvYcW2YF4HBxfUvXYMYnPW2M0HrJagaqGqGpu8zwyD_85OJ_S2-6VqEWyZbFG0_aFQ0yVgcfg=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNEDpzSV1LZanARMdbhzC31aXP449-iDuqMvfg1MxHDqW_HipSXSZ4S3CB9Lk3VQE-JjXL3kawVXMBc5pXs9Sz_t5mh2KrijzwTcAu4yDJdSV8VxrdEtqZMIXQhl1D_Lb7CSZWKSTlXuE_MLtcly-dr5Q=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPBjVq6Gf5vQlsGnAdwKQm5tXjIfUAZHx4K4q2gQYc81vzUbjApGBQEK1Rq7fXXFCTO_P8nsyc0P0KAD0ZnlhWefbL1vyKcim7GSPOpiWrQhSOyhfx9Cvvj5n70zkQKEWpKgmAKlkgVtY1FoeX4sGT74w=w361-h641-s-no-gm'

            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczNfwQZgXXx6_wRoZAtDl52-qUVuXvAByBotuDcbcA3mTr4Mbh9GKbZWDt1ayOWHvZwP9_xPNG8q_Y6vl5FOwMBWVoDwFhfLdQYITTPKpQ2NW7S70TVa2S4ni5QLGbz06YxY7lhhJhbIAlBwowm3Fj_6pw=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPjZgTi_VC-Ts1-PT0wL7PZ-heVGBijolF0X-Mh0DZY8DvuUka_gqUJDMg-g4YrOUg909_c9A7pMvL9igF-myuz28jL3mUu3oAZhXgwYsvQuHh6YJyecghIkOt9NxKAY27Q23W3stkXBo5BUWZTEufmqA=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMrboK-8XvrbHSPHo0LXVHFYAupyA_jtUbgdbwNrkOdDw1yQuV6JTaaeNX5by81kftUQmd7SyxCSiD3c36h63RqA64TgsW_j8sE-Ynj5Nqniww6sUQbIrOS4Bj9gUvaq7-q6kA-8itP4UKsZs8vr-8gFw=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPRVvtNE6Uu204ukplyPn1IV5GAj-0ddfeGyez8HZKQTx5X1zDSSVUamSvUWlxu1NSaY8T5yCe7qO9JHP8qTwnt2E_iGenWKbODDo5bePDI4oq8654eeumiTRpmVlkG0c4eGL-EPZQH05tQPJIP4PVW5w=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNmhq346XD2NvznntfwD3DCjmppyBRhpR13usN2phBosC0KRMcRo1nr9s9zbN5pW-jONzwmCglogWuFiV7ybZJN_OijvCGk-BADnXOlOuSAWwU7FHsM9cNCLUFWoH2t5Ho8nw_etS9_FNgCZVKZ132Y7w=w481-h641-s-no-gm'

            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczOh_jmVwWP7pZK2VE7iHMBvzy3MWoabeukyth8l5yd6MZhrhcwtlYOCDOI97R3NqUCCNAiNQrSsMmWSrV8peZHR7OD8rlGCXitN8jqOrKGTPeOo3Kxo3MdeL8AdJ4_O62onoTKju-fHy5S7E3IY6Xtn1g=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPisZLjwXZRrsD7hZrLVQqJVyMWQmtgtffKr6InKGcyXrt0GGgXp52aCqY2hkPm8tv8P3Io_lCDCGDRULFfdJGblahS5wSaPvxhK65ZjwpSMQOBonGhfEpaMN2bZ2Tpvp_Hel5hefTEFMPb7saoBCgIDQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPsG0lvplcSYyKyvGIO6ZC-ZlCHkvmwFPWrS4MMJ_e5Cu7Igg6SorPm1KJJlD-f7zok0evPB4TOiuMF8d_axPGz8ywbaSvhKAqGbZicYb7WTsAvoFfJnDB0lZ0cvCFOgKVT5y4BAcEuilKhECKwkDHQ7A=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPsG0lvplcSYyKyvGIO6ZC-ZlCHkvmwFPWrS4MMJ_e5Cu7Igg6SorPm1KJJlD-f7zok0evPB4TOiuMF8d_axPGz8ywbaSvhKAqGbZicYb7WTsAvoFfJnDB0lZ0cvCFOgKVT5y4BAcEuilKhECKwkDHQ7A=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczNg8Awz4WMZQIcP5_6VXT2Yhi3czv4crlrskhZNJ2dpvJn_L7a5augBSQSlxiDt_dJn8rKY4ES4XlVRaLJosXNH6Rn8dOSW4K0LiTMuVgDnyN-oFCiQ_fdgaG_hbayh_PpuIXQz2hiW7KBiQpQVDk_6_g=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMkBEnduOVyGnqtwf4SUqzA9wjqGmHtEIgydULZ9xDlDD8OpqYhyrIWWVTrht2s30eeiIHkUaGwmU8AXvLWOEZG2Pn31oSSAIs-keJ3YHzTQf5Zgd6vT7-0Cvq2GWOHnHedWJ0KJz6fPSY1_2WQbTjMIQ=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczONDROgjrIvba4XwYnDaVE_B3xM36eWTO7EaNWtQcsm46NJA4Ov9W-YdcyV82ZGCodftUxJ69CNxPzer3AAaWMWTZcmHM7QCC2wSYUvjUVm9h9HSlkvFmeLf8BMgQmQ40wgxuPgFV6_kECV1b_kVkTpcw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPHttsu3BK-w7TbIi_jRXMCxK6n6TE5KlS298i3DDB5RpnRao_61a_pxl_POSEcsdVgG1LIuGiMiX7V1HtMv7_rIEj87PaHZpJgQXyfCz9z8sJ3cHWEAoeSO5qqS-wBs7Mp6PCz1hFVDidB8T8c4IQnpg=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMXi_buwV-aAYQsuWFtLv4wU6tcosJDTvRV196hyZtw9XAJgRm6Nqby8FN-yILA3HoUy0yiNAr1Mxz-vrDJEakhpW6yN4MTXjp__TbKrsWCspGz-a3_TyAXNSJX21xzU1WuYtWPn_NVvjt8V7ZMonz6Xg=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMbWuaBf2P9_ostmZzYD8jYp_3j-Vw0ADvpwEbuSFXRO0bSk9jKYNptSBovwkX19RRxm0ur6pKndQ659qs0ynWioDGIUAiNdNR_vkPlQolEmWVMHBdU2Lh16FDSZ4Os3hOJ-KnIDc7Q68ehwvXVjHpSKA=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczOEa8cVmnN6B_49W9kujpWBiMgDE-jU_G1xZUAaOPqew3iWr8vqDBoP7JPK4sIeoihOtMhot8Vd3Pp4hJ1goGBCaP9wEj-Lr4EVrW_dV5lbsbMfUiV1lmQr1Et3G01pbqMT-ZExkEz0TYGWqpPVsPzd5Q=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNNPPvYuelzPRnGOt2lSG9hD2vkCNKs14CNjTFZTb_K3Nu7eRC16ngeg1YFzqZTF0ZAReulbpNAAwW_xamu8uA4ifA2kkAVj3azIeX_z_I_NySeyGtW-YV7oJIp3sO-r7J-VYANsAHjUQn-1dgxgei06w=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOLF-JixcYsiGElvnepQB6ECAWENJe5A7vZSa8mesT-qFhGs2aSxCbko3eZBhpzyMw9RL2ff8C9_DP1IOHAvTsg36zobZEqbQIAEc07RgsxXg_nKVsjUSSaYhwU2yHivTL_m8bNF6gggU93uNATuLpMrQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOLF-JixcYsiGElvnepQB6ECAWENJe5A7vZSa8mesT-qFhGs2aSxCbko3eZBhpzyMw9RL2ff8C9_DP1IOHAvTsg36zobZEqbQIAEc07RgsxXg_nKVsjUSSaYhwU2yHivTL_m8bNF6gggU93uNATuLpMrQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPMDQBS9WiXYQ--m6ac9iAf7AYIGYobGPBH2pRXycsk0XzSvBqq_iKm_O5sV8RPsyNTXjG8x6HzMeVDxQgFCCC0rDfOiQ_8_ypSmfD6Y6XRL2Wh9HCASZBUCicnMAZdMeBQInp8px5XS9GX3Y3GA1TTrw=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczN2TJqIFSXGYM1jaGwa47hZFF8hmYCXTdElFaehlIDgFDRrxFVh2T2LkCtZC8nmm-NjTL_sEBU9uBRAxRE14Gp7ScK9zz8VTpq-CKHmTaVGsklFK8z5SaVc8tI77gEZRgwy7zifwvpLS_dSJculwRJhFg=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOI_O56u7M3O3n7Qn9UdPQaH1orpptJC9IQcnhO4XpG81hvRFGK6-SbXcnKdVgeQ755dubYFlsodiXbbb5xg_OT7nAf9HwW3A-Or-CQS2FoJrGWW_GY_AJiSuWSB-a6oEng5_f_X69O2rIrBAgY9c_HlQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMMhUq5bHpDM_OVa7FuPK5TKYRGTJeUZxxVnJDYz76TMaT5l1BKGPJnrjHWVDEKTTZDrXAQLa77CNRuHP_JD4zM0Qzy-jGXqjFtuwHJ178-0bEKTYtYCpHNpAsVAg8UqZb4XRaRYUwHFyCGpiLH5mFHmw=w1140-h641-s-no-gm'

            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczOIKv8hoAvaosxH-03zGCIj8lQpX9qEqFJC5Lrudv-BTE5TUX9oKL20-naIAvXJdaFnu7VKXRWnnzqg4Mk5qv3NhzjIEeXNno-FvgyrjDwzGQsf_W9nm_0cZHVooVBNFIjZSz5azNxgslnCXvi7-zfbhA=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNIAPjCiDlVq2Od1VdRK7GcpsF7hM0Q1ym5RIe1XdaPJSgpQn0sYvj8AWstzxelQULwNtlpDxfPzplXvKVuu-wAsG2zCy2CT0aYT5KOAdQDezWUyxM5V_XmNAVCVenK49LopAhkqsA9g2qsxeFAwl4GdQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczM_gRHHUq5s335i_yq3bPf8eYI1qhInUx5P7TgMvX7ht1fch8vEVH9nygYAnYIUk_FVS51O9GuX3eNVATMdJKqOs_zZfSLcgQhLgVx47M1rLR2Rndp0cPNXzJiPwOHwsRL5dmC4zM1ovCMuyL8ROHae6g=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczM_gRHHUq5s335i_yq3bPf8eYI1qhInUx5P7TgMvX7ht1fch8vEVH9nygYAnYIUk_FVS51O9GuX3eNVATMdJKqOs_zZfSLcgQhLgVx47M1rLR2Rndp0cPNXzJiPwOHwsRL5dmC4zM1ovCMuyL8ROHae6g=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMD-SXHTjXE1wqCOFBUzfmgQx5W6eG3u3LEqeVS7WubIKaL5WzgwyF55cP5x1nT68dT8AkfFg3a5Jrb5S27Vr7Sta92Cuvp7eRQWVzMkhs2eSjHPKQ_O2oRpZBe2hgSrLTof_Y4boN_h9IoUNubpuQNrQ=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPMpre-8ssCR2nzOU52fUrIR9CX54DmrC2e5KE-nqVuLHa1Qmguf9okI5daffj-WrvTfYru1x4klRMdVYwiVoQ2O0HWKsKTYxeLDBzEoFfnC1JCLkH29e1Ap-GJIPVLGc_xYzr7rFsXim7I6oZLANwZjA=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNoYGVgz83EM1XO1HqnTecJLfCLGGLzd0M-XkND4ezqSEH_2NNTt-BhmDNActaCKKrWvQealQtS4zU4l7T9sybNlH99lwQm44DFauD2k78TIwzqEMoiCrmhDkwm_XRVCbI1UI4Hqyb36Ar9h8c-992SAA=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOBTfj_z733kXJNQPap2AvhOB0MEDJFi_ZwzDphReWb73pYkxXKf7tqmFntSNKjkgCh0iLJy9An9jpiQXEkSP7tHbSid8Y1bHvDmEoQ23yRAjlZLxuaSxbUC3Gor9T0zHg9kcKGP2r7cny1CywA_jvrbg=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczPOg31EAgVA6xtX-9XxKcyKXTCubjB4zKswdZ2gqR8ABJL-gDtYxULLzCZ98BLK2oL0qxpA9lOhAFiPBe7l3Qg5rO6ZpS6f1VcfC3fxYpVMfxCDjTm5QpqLYk4TCz1veVZEQmyLwcOZOcOas3PKhWlCUw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczN9FlwlMTkNmMaDVF7eogoBOQ-VcVfgcsp841SAiWysz-DGZxcx3SjoLRTSTyuH72C6QmdbFLT0dbk95BMOh_do-6nAsLvjsAQG9OmhmUWeIKGpvpTtYc5B1Hi_5b4QbD5pE77K7N6N19LTX0bsHv3fhg=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPOg31EAgVA6xtX-9XxKcyKXTCubjB4zKswdZ2gqR8ABJL-gDtYxULLzCZ98BLK2oL0qxpA9lOhAFiPBe7l3Qg5rO6ZpS6f1VcfC3fxYpVMfxCDjTm5QpqLYk4TCz1veVZEQmyLwcOZOcOas3PKhWlCUw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPotQx8ghzgN_0drFggWlZdQqbD96RpdqXef6LiwhgcpJE-1Ni3QorWkgcopK-vXb2S8N5b0AUuP8n07X7C1HJ5Cv6YHW72AGGtO2DNWkjTs0ppv1dLnlz8V0PBrNKKljLdQ_-kqj4xIVmTq-llzkzgTA=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczMS6XcN9iuW83yEZ6jTQNnA2wSvvjDPihZ8V98gJsikOPyGZPN1IowbX8-bTB07KFdoN5HhlgTbz_l7BqbKPEXRz2He4D-X1eM18ySZJ4xR5JKbSrocB51K6z37sNkT6ikXYEoYf8p0wuF-Bg7ouLKViw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOUKkOhny9Cip6fW--1NwANM-HWPmlQF_STVxBEXrTwDzPB9ObV8W8Lf_u1eytvr3JnBmdat2n3SUe5NcKEl3X9CeHgcr0CIgPn5UibP51Uq0mMj9uMxsCvw9A0s18CITFdkWqOQa8aYIKH_pLcsTDolg=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPoF8phxkwGRGAi5c259eBaElLoS9XqwpenFqXbYJIkk3ydxN7kxd3aRfNu1MO0X2y7WRyokjJamg9BaVprOzQuG4FzZfpP02bFbRGLOmslifTauFe33EaUfB5QGHDmTugrEVlEpolcplkSCcvV4mYOhw=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczOiOPhdqj7PrY5TLOWaD1EK_F-TAN5arOVhYYMEqIdMTb3C6h8Dot57rINzhrRypyOzfxq0BVutUAS9h1a1I6PsUQYxUkFbFXJ3VcEAvCJemBTCMisg22zscBOiul1DtDqZZaXrMn386Ouv-vKTyAxQfw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNDSXvMIBBt91Geq-Gon3FPClMaMo79KOGPVoh9UFi3Zld8uckmAeVHKWEOfxwzV07AxzCdVdLJMzauNOGNhPOJFEJaJm6afRXamb1F0C19vQccZnymJYXN9NYDgfvBilymzU3pXImKLtGQBGjnwaxyag=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOdNXLayI-wwarioqNZAntStCGJbrIlmDQgWQKM5W7G30lbTxRnOqtwiwMcO5YTZwEg96qt2C-RXEQ_nu3j8hbwXfUpFyB9isBv5HKoR0RlmObVa_ALD7h8ADO2ZtyZbim0S0SumsshIeN1C6npVWmisQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczP3WtUWQ0t929G_t2cNG_ET5PAjTdTU_1YG1xms-dISKH61gxtGmloZVXqHv-kfpUeHX1NLrlOXOf8dZuW-aZFXm7XinXbN9rspbfbGT7MGu2EmpqNLiFV9E7qxCepT8-0Bp0mpJ_CqkHiZAJxkHkekcQ=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNxAgDTuP4b32WOco7o_EIH-WQ65iWXM8S1VJnNA8Rh9hTvG4DOi4Mkf95ZWQsl_f9mVofbvVcvQArkRGTRtPSFrStz9WTh5NNaL37NQu2bCv3AimaWEU1mhvKVotD1Sqmk2esnmyNnX5cTYzxBS631lw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNxAgDTuP4b32WOco7o_EIH-WQ65iWXM8S1VJnNA8Rh9hTvG4DOi4Mkf95ZWQsl_f9mVofbvVcvQArkRGTRtPSFrStz9WTh5NNaL37NQu2bCv3AimaWEU1mhvKVotD1Sqmk2esnmyNnX5cTYzxBS631lw=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczM2urbCpf8-6I1qOSGveRUcgs5Lv7WH4VulNlczPU2XAoA6UzOWOmLacy_l1eUR2zsNcRAwvS6M5FfiqtKxvdYqSoXbkwiiDOZK-aZ8Q1-98mU7oFKuqbPDTJO_S9bNzzn1Dqh7f4Rm4XLZSl2VBA741g=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNsR7LytDng7tB1f-J8zfuKddhxQ3PDSCiepZglG02juvZ_EZM2yYVALCG8-kXeuArKzoFmMj7DZjbVfJKFIOsF5nEdbvJP_TTDNpEFU6RO9MpxwDXYbSc8US9B5YkWAX58rDbsXKwT-2V6i2NRMCUUdg=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNDUdUVQNVFOo1ZK8xtLnGF6eK-M-2YQUxPLOQuTv_LuTsDd0FJRYTtpCxMlPsWxgbmNQR6WDOo0E54I4gvNzg8d-f1rqWkCzViid4A7PIgCIo6gBsCgsRNtOnBy0JpaeI8bgbq497AIJVkNW7D9dcxcw=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPp-TiqPPeaGekL73kC1II2Jgn1q1EPAMpRRPejPuN9dGfupHH1GjBwuLyj3tObw1lOtrquwtOkU0wDNCcnRAACTGXLMWAaPVpA4FbatxpBh6snJppJBHzLZ7YHAliTdazNtkrBHkmmOoHpIyw_zbQGGg=w1140-h641-s-no-gm',
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczNxEEYCgk2T-7bVQ_5qblk47xpa4rUvCjsHXeF95On02Sq747na8OfYrWM2xCA6Qq7EWFyXxCXDKWQdG8cpfOL1CUs1FOIUlD1L52D63rGuVpvj4h7vDUxe3jEFonYrAfvfWeW4l8kH5HJ2navGnysjXQ=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNxEEYCgk2T-7bVQ_5qblk47xpa4rUvCjsHXeF95On02Sq747na8OfYrWM2xCA6Qq7EWFyXxCXDKWQdG8cpfOL1CUs1FOIUlD1L52D63rGuVpvj4h7vDUxe3jEFonYrAfvfWeW4l8kH5HJ2navGnysjXQ=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczM_s9JLqugaaz0d7NmmPKnqOPkaaDB8I85vQ_YGFNcvceZwynfPIbvEnJFLKMToaY5p7hfZSM086nisIsmA3loXqSwIMTrR7T3kRtebrCnh0FZarVyZ-L4PxoiAtAtRi9TXSYKJ-F_3O3cXyCD6DNjfnA=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczP-QT08Vs3TgomOn5QNNghLLKP1IO3aoWX2kstGQeKUav2UbXENQyh3wLUs6MEfZvhpHTz6W5oEvRZLF4HdkerbdGhOt96zP7Y2TraWukdpzV1WYDLtl-jNC0RxJmVneukk71_wPPYtHlLdKwhPwoQV6w=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNc96aWk0Re-y0skmkgl_boq75n5dpjsS8YS5TP0-CHzemkp0PFO9hk55qBk0cG0pI2x91r2DnqJS7wRU0trwGVwUL3FqfRH3gWXZakJ8V3kHqyYRJDshUJ9FdpSVZjlfXP9zlg6zdPDMEJczuGC57EJw=w481-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczON-yGSq3Lc9UnI6v7SUjZmmJJKLAn3P2r8ACL6qq9CmKl0mJnOmK0Rx5u-ykzSi_FaD1ueMWMpwCljqezKKXoA4S9LLVxyCHa2G9H__dQKwk1YgiPZc0mha9DCtoezoOyxvySGT-HErNfvZi_af0l7Sw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczM7EuZc4I6TIS8JmCSON-j0TcT2DpyGm_KNg1hshzXDUyjEtyADkWjyBxFowc7VMK_PxNNSOJRqlvrgxYijrk2NZyAR4sSTT3qI9ZqjSCRF-47qWbKBxed7l2qiIlWbbCayuZfslCqjG9KOg7WMjeVk-A=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNw5mhG94DvqE0Nnqzy-vCBOItCuNdeEdqKbjiKosinc2sNWpK08dxEHppfy63wOaN8xiSsWA1618ioUmOYUr4oCKR-RqoFR5FCmJtSLe1yFx1e5W5t3iOT3t0bTFEIxY5yGff1f0sbXTxzR9rRkPr19g=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMPLi3CPVi0x-ArZoMRSgyaeUoGjqnKrQuoS_R_kl3o3liRoIrMltj1URNHGFKJueItSJGptHYuEKsilt5vwmdqHAfkp1eQU7idYEr7Rog_Hg3VDnOWNgSRfujm6sQrpoSWxVI47RB07apOGkz3mrZk5Q=w481-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczM6De-NytuyS_kp2sb1sUMe7mkVn5tHCjx8OGIr6bEIOYeYyetGcHkDv5pJe3oV1XBnZq55zoA6Rcah2Lj3EWBhBNFVP5h7a4HOj2ba34DgDzV4l3GFOAPTASRwNtTpJVYMr0FQMQ7tMjtGfWgWDvBecg=w361-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOtzxM7gMAW4jkyXT2YVn922XtCXh3MZRbHxuAIewrPNwVV6LSEM5POebsOPNKKBHUT2F2mDIiky8kaVQSvUGC7-THwSBwzSPbqIn6yCwZsAHWx9s45ss0iuKxHevjiD75ZjvPHYwHqaGoD4dWY2ekRZg=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczNgE4F0txWA-0HfGfjfeBKNO0j3v_iFGzSaFZKuFlgG5BcXQSAlwXrRcTJfPwxrRdMgGZ932RIBETbofnYqhtkMVtCeE3WdufJGmeZd_fVt3rpG-EuFFQsm31iHSwmhYIrLC9Imf0-7pmKj1P7sUS96FA=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczPaIsjzY5JjCI-1N6JJzcJey7YWHHqrjNoUp78inp6SHpiUFT0AKDeBD0sayebmEu6dOHABlOKo-f8eHIfFTb2Pm7Sfa40FQCdoKMQQxsFj-D_KN3JXuBtn7wCRkMTGPcW_4tbE3RB6WHha1TNUQ5icZQ=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
            <Trabajos imgs={[
              'https://lh3.googleusercontent.com/pw/AP1GczN68cRLiMW0FW8Xnds_H1ntPnuqLu39dF6OP7obBqllXIU7-b7BzscNyIGDCokadZ39toVMxOyfF_JTVgMzX1p9qJQGOPYzy-mCNa2Zav8kTOOY078mD9o2ZKhRpktmjokNBvHVTUb1Uu5llXiNpLbnxw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczM7o6s6xnMg3ABQKs-W0tPQKaGt_uyld10tnBU6ZJ8bFr79-slzblxTjmAyuZDylt0_WeN1I_yLz4FekghSVF3hkB48p6M8gn-4QQoxQOhPcKkt9Hlu8nljvOHw7Enu-xQW1EoRv4wU6moSd98qLly43Q=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczN3lKKrxta8p-_U8KOlCETGZF0f4bG4XjIgIat5iy6IAuY_2_HkYn4S2_b1hd0Ja3wTu3Qk-peoDpUlCnarfH0RIs22bmogqb8zi4hUT9-QyjePZ53N8Zvys5-Sp9vtZMFegqYYQeeDOqdDx3DlopD4gA=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOiJJOlkU8xASSy2kAYffsfiefs81rS99NoP5lJJg6zTglC8Fxry7vBdtw2FEdANh678qpVm77EW5pqa3x3NjrwVdb_ByZM8Q823vDQccxJ-vfc_4XQo65BjN81R0BHodcZk-U-91T60Iorwh5U7yoc5w=w855-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOipSzVqlc-iy7OpPmO7yI9BARlvpVzQuGMLzw2n4-qc3xhC3IJsCq2eLi2z1vps66pNjo9aBU8cJFmsZnWwUkDctMKKpw0LgE_MOJ5Yue4AVmeTZOwNC7BEAU4Cv6HDP1O2jvTB9Z1pzLRpJz3BvClcA=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczMjVH_byX106Dbove5RJdj_h9dZ1xcoT4RGAR3eU9cf-RPpTnl3wMiCQY3ljiLwv1gQs8R-ItHfb28vXCj12UWT4BTegOp10r5mUPA0ZWdpdHrU744w9WQWxiaKSytsdHYxC4mba6PMKGFNMAR3CDSAbw=w1140-h641-s-no-gm',
              'https://lh3.googleusercontent.com/pw/AP1GczOtTjAwPBOe16v_vk2obogBtxOKdC1rtrYepd4tz14pHSOHnRX7MGL5_1n-kb6x7G-Gi5-tLWUxK48ZKjpAJsHLBu0nHfDzWq-oyuczvziwoTa3ifiKF8iFuxPPKckDja2WO1Db7iekLEXssP3em-Wz1A=w1140-h641-s-no-gm'
            ]} titulo= {data.pools[0].name} />
        </div>

    )
}