---
layout: default
---

<tr>
    <td><img class="profile-picture" src="files/photo.jpg"></td>
    <td><div class="profile-doc">
		Ph.D. Student @ UC Berkeley<br> 
		<a href="{{site.webs.BAIR}}" target="_blank" rel="noopener">Berkeley Artifical Intelligence Research (BAIR)</a> <br>
		Advised by <a href="{{site.webs.Angjoo_Kanazawa}}" target="_blank" rel="noopener">Angjoo Kanazawa</a><br> 
		<br> 
		<a href="mailto:ruilongl@usc.edu">
			<i class="fa fa-envelope" aria-hidden="true"></i> ruilongli at berkeley.edu </a> <br> 
		<a href="https://github.com/liruilong940607">
			<i class="fa fa-github" aria-hidden="true"></i> Github </a> <br> 
		<a href="https://scholar.google.com/citations?user=Pz8G-koAAAAJ&hl=en">
			<i class="fa fa-google" aria-hidden="true"></i> Google Scholar </a> <br> 
		<a href="https://www.linkedin.com/in/ruilong-li-26b577172/">
			<i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn </a> <br> 
	</div></td>
</tr>


<br> 


## About Me

<p>
I'm a first-year Ph.D. student in the Department of EECS at UC Berkeley and a member of <a href="{{site.webs.BAIR}}" target="_blank" rel="noopener">BAIR</a>, advised by Prof. <a href="{{site.webs.Angjoo_Kanazawa}}" target="_blank" rel="noopener">Angjoo Kanazawa</a>. I'm also currently a student researcher at Facebook Reality Labs (FRL) working with <a href="{{site.webs.Christoph_Lassner}}" target="_blank" rel="noopener">Chirstoph Lassner</a>.
<br> <br> 
Previously, I had the pleasure to be a research assistant in the <a href="{{site.webs.VGL}}" target="_blank" rel="noopener">Vision &amp; Graphics Lab</a> at USC ICT for 2 years, collaborating with Prof. <a href="{{site.webs.Hao_Li}}" target="_blank" rel="noopener">Hao Li</a>. I obtained my B.Sc. degree in <b>Physics and Mathematics</b> and M.Sc. degree in <b>Computer Science</b> at Tsinghua University, where I worked closely with Prof.  <a href="{{site.webs.Shi-Min_Hu}}" target="_blank" rel="noopener">Shi-Min Hu</a> and Prof. <a href="{{site.webs.Song-Hai_Zhang}}" target="_blank" rel="noopener">Song-Hai Zhang</a>. I've been interned at Google Research, Facebook Reality Labs, and Bytedance AI Lab.
<br> <br> 
My current research interests lie in the intersection field of Computer Vision and Computer Graphics, especially on the tasks of <b>generation and reconstruction in the 3D world</b> via information from 2D images. 
<br> <br> 

<br>
</p>

## Publications

{% assign years = site.data.papers | group_by:"year" | sort: "name" | reverse %}

{% for year in years %}

### {{ year.name }}	
---

{% for paper in year.items %}
<table class="paper-list">
  <tr>
    <td><img class="paper-logo" src="{{paper.paper-logo}}"></td>
    <td>
		<p class="paper-title">{{paper.paper-title}}</p>  
		<p class="paper-authors">
			{% for author in paper.paper-authors %}
				{% if forloop.last == true %}
					{{author.name}}.
				{% else %}
					{{author.name}},
				{% endif %}
			{% endfor %}
		</p>
		<p class="paper-pub">{{paper.paper-pub}}</p>
		<p class="paper-links">
			{% if paper.link-pdf %}
			<a href="{{paper.link-pdf}}" target="_blank" rel="noopener">
				<i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF </a>
			{% endif %}

			{% if paper.link-arxiv %}
			<a href="{{paper.link-arxiv}}" target="_blank" rel="noopener">
				<i class="fa fa-file" aria-hidden="true"></i> arXiv </a> 
			{% endif %}

			{% if paper.link-projectpage %}
			<a href="{{paper.link-projectpage}}" target="_blank" rel="noopener">
				<i class="fa fa-link" aria-hidden="true"></i> ProjectPage </a>  
			{% endif %}

			{% if paper.link-supplementary %}
			<a href="{{paper.link-supplementary}}" target="_blank" rel="noopener">
				<i class="fa fa-file-pdf-o" aria-hidden="true"></i> Supplementary </a>  
			{% endif %}

			{% if paper.link-gitcode %}
			<a href="{{paper.link-gitcode}}" target="_blank" rel="noopener">
				<i class="fa fa-github" aria-hidden="true"></i> Code </a>  
				<!-- <iframe style="margin-left: 2px; margin-bottom:-5px;" 
					frameborder="0" scrolling="0" width="100px" height="20px"
	                src="https://ghbtns.com/github-btn.html?user=liruilong940607&repo=Pose2Seg&type=star&count=true" >
	        	</iframe> -->
	        {% endif %}

	        {% if paper.link-gitdata %}
			<a href="{{paper.link-gitdata}}" target="_blank" rel="noopener">
				<i class="fa fa-github" aria-hidden="true"></i> Dataset </a> 
				<!-- <iframe style="margin-left: 2px; margin-bottom:-5px;" 
					frameborder="0" scrolling="0" width="100px" height="20px"
	                src="https://ghbtns.com/github-btn.html?user=liruilong940607&repo=OCHumanApi&type=star&count=true" >
	        	</iframe> -->
	        {% endif %}

	        {% if paper.link-video %}
	        <a href="{{paper.link-video}}" target="_blank" rel="noopener">
				<i class="fa fa-file-video-o" aria-hidden="true"></i> Video </a> 
			{% endif %}

			{% if paper.link-video1 %}
	        <a href="{{paper.link-video1}}" target="_blank" rel="noopener">
				<i class="fa fa-file-video-o" aria-hidden="true"></i> Video1 </a> 
			{% endif %}

			{% if paper.link-video2 %}
	        <a href="{{paper.link-video2}}" target="_blank" rel="noopener">
				<i class="fa fa-file-video-o" aria-hidden="true"></i> Video2 </a> 
			{% endif %}

			{% if paper.link-slides %}
	        <a href="{{paper.link-slides}}" target="_blank" rel="noopener">
				<i class="fa fa-files-o" aria-hidden="true"></i> Slides </a> 
			{% endif %}

			{% if paper.link-poster %}
	        <a href="{{paper.link-poster}}" target="_blank" rel="noopener">
				<i class="fa fa-file" aria-hidden="true"></i> Poster </a> 
			{% endif %}

		</p>
	</td>
  </tr>
</table>
{% endfor %}
{% endfor %}

<!-- See [full publication list](full_pubs.html). -->


