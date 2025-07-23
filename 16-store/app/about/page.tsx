import { Target, Eye, Heart, Shield, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import img from "@/assets/pexels-monica-1034584.jpg";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const AboutPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Martinez",
      role: "Store Owner & Founder",
      bio: "With a passion for quality products and customer service, Sarah started this store to bring the best items to our community.",
      image: "/api/placeholder/300/300",
      initials: "SM"
    },
    {
      name: "Michael Thompson",
      role: "Store Manager",
      bio: "Michael ensures our daily operations run smoothly and that every customer has an exceptional shopping experience.",
      image: "/api/placeholder/300/300",
      initials: "MT"
    },
    {
      name: "Emily Davis",
      role: "Head Buyer",
      bio: "Emily travels the world to source the finest products and latest trends for our customers.",
      image: "/api/placeholder/300/300",
      initials: "ED"
    },
    {
      name: "David Wilson",
      role: "Customer Service Lead",
      bio: "David leads our customer service team with a commitment to making every interaction memorable.",
      image: "/api/placeholder/300/300",
      initials: "DW"
    }
  ];

  const values: Value[] = [
    {
      title: "Quality",
      description: "We carefully curate every product to ensure it meets our high standards of quality and craftsmanship.",
      icon: Heart
    },
    {
      title: "Trust",
      description: "We build lasting relationships with our customers through honest pricing and reliable service.",
      icon: Shield
    },
    {
      title: "Community",
      description: "We're more than a store - we're part of the community, supporting local initiatives and causes.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "From product selection to customer service, we strive for excellence in everything we do.",
      icon: Star
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "8", label: "Years Serving" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            About Our Store
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Curating quality products and creating memorable shopping experiences since 2016
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-primary"></div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Founded in 2016, our store began with a simple dream: to create a shopping destination where quality meets affordability and every customer feels valued. What started as a small local shop has grown into a beloved community hub, serving thousands of customers with carefully selected products.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                We specialize in sourcing unique, high-quality items from trusted suppliers around the world. Our commitment goes beyond just selling products - we're dedicated to building relationships, supporting our community, and creating a shopping experience that brings joy to everyday life.
              </p>
              <div className="flex flex-wrap gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="w-full h-96 bg-muted">
                  <Image 
                    src={img} 
                    alt="Our store interior"
                    className="w-full h-full object-cover"
                    width={600}
                    height={400}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To provide our community with exceptional products and personalized service that enhances daily life. We strive to be more than just a store - we aim to be a trusted partner in helping customers find exactly what they need at prices they can afford.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Eye className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To become the most beloved local store in our community, known for our curated selection, outstanding customer service, and commitment to supporting local initiatives that make our neighborhood a better place to live.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center transition-transform hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The dedicated people who make your shopping experience exceptional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center transition-transform hover:scale-105">
                <CardHeader>
                  <Avatar className="w-32 h-32 mx-auto">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl">{member.initials}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Shop With Us?</h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Visit our store today and discover amazing products at great prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4">
              Visit Our Store
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              Browse Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;