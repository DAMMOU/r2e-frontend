import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
}

interface Category {
  id: string;
  name: string;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss']
})
export class Faq {
  searchQuery: string = '';
  selectedCategory: string = 'all';
  
  categories: Category[] = [
    { id: 'all', name: 'Toutes les questions' },
    { id: 'general', name: 'Général' },
    { id: 'technical', name: 'Technique' },
    { id: 'billing', name: 'Facturation' },
    { id: 'account', name: 'Compte' }
  ];

  faqs: FAQ[] = [
    {
      id: 1,
      question: 'Comment créer un compte ?',
      answer: 'Pour créer un compte, cliquez sur le bouton "S\'inscrire" en haut à droite de la page et suivez les instructions.',
      category: 'account',
      isOpen: false
    },
    {
      id: 2,
      question: 'Quels sont les moyens de paiement acceptés ?',
      answer: 'Nous acceptons les cartes de crédit (Visa, MasterCard), PayPal et les virements bancaires.',
      category: 'billing',
      isOpen: false
    },
    // Ajoutez plus de questions ici...
  ];

  filteredFAQs: FAQ[] = [...this.faqs];

  toggleFAQ(id: number): void {
    const faq = this.faqs.find(f => f.id === id);
    if (faq) {
      faq.isOpen = !faq.isOpen;
    }
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
    this.filterFAQs();
  }

  filterFAQs(): void {
    this.filteredFAQs = this.faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || faq.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  getCategoryCount(categoryId: string): number {
    if (categoryId === 'all') {
      return this.faqs.length;
    }
    return this.faqs.filter(faq => faq.category === categoryId).length;
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }
}