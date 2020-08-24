---
layout: default
---

<tr>
    <td><img class="profile-picture" src="files/photo.jpg"></td>
    <td><div class="profile-doc">
		2nd Year Ph.D. Student @ USC<br> 
		<a href="{{site.webs.VGL}}" target="_blank" rel="noopener">ICT Vision & Graphics Lab</a> <br>
		Advised by <a href="{{site.webs.Hao_Li}}" target="_blank" rel="noopener">Prof. Hao Li</a><br> 
		<br> 
		<a href="mailto:ruilongl@usc.edu">
			<i class="fa fa-envelope" aria-hidden="true"></i> ruilongl at usc.edu </a> <br> 
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
I'm now a second-year Ph.D student in <a href="{{site.webs.VGL}}" target="_blank" rel="noopener">Vision and Graphics Lab</a> @ USC, California, USA, working with <a href="{{site.webs.Hao_Li}}" target="_blank" rel="noopener">Prof. Hao Li</a>. I'm also a student researcher at <a href="https://research.google/" target="_blank" rel="noopener">Google Research</a>, working with <a href="http://www.cs.unc.edu/~alexyang/" target="_blank" rel="noopener">Shan Yang</a> and <a href="https://people.eecs.berkeley.edu/~kanazawa/" target="_blank" rel="noopener">Prof. Angjoo Kanazawa</a>.
My current research interests lie in the intersection field of Computer Vision and Computer Graphics, especially on the tasks of <b>generation and reconstruction in the 3D world</b> via information from 2D images. 
Previously, I spent 7 beautiful years (2012-2019) in <b>Tsinghua University</b>, from where I received my B.Sc. degree in <b>Physics and Mathematics</b> (2016) and M.Sc. degree in <b>Computer Science</b> (2019). I miss my days being part of the <a href="{{site.webs.CSCG}}" target="_blank" rel="noopener">Graphics &amp; Geometric Computing Group</a> of Tsinghua University, working with <a href="{{site.webs.Shi-Min_Hu}}" target="_blank" rel="noopener">Prof. Shi-Min Hu</a> and <a href="{{site.webs.Song-Hai_Zhang}}" target="_blank" rel="noopener">Prof. Song-Hai Zhang</a>.
My previous researches were mainly focusing on the basic problems in Computer Vision such as <b>Segmenation</b>, <b>Pose Estimation</b> and <b>Image Generation</b>. 

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


