const initialData = {
  storeName: 'GHOST',
  instagram: '@ngdconceptbh',
  city: 'Belo Horizonte, MG',
  monthlyGoal: 45000,
  notificationsRead: false,
  clients: [
    {
      id: 'c1',
      name: 'Gabriel Henrique',
      tier: 'Gold',
      phone: '(31) 99841-2210',
      email: 'gabriel.h@email.com',
      birthday: '1996-11-14',
      city: 'Belo Horizonte, MG',
      notes: 'Plano VIP ativo. Veste G nas camisetas Oversized e 42 nas calças cargo.',
      since: '2023'
    },
    {
      id: 'c2',
      name: 'Lucas Matheus Oliveira',
      tier: 'Plano VIP',
      phone: '(31) 99120-8450',
      email: 'lucas.matheus@email.com',
      birthday: '1994-12-03',
      city: 'Nova Lima, MG',
      notes: 'Sempre compra lançamentos de drops exclusivos via PIX.',
      since: '2024'
    },
    {
      id: 'c3',
      name: 'Rafael Drummond',
      tier: 'Gold',
      phone: '(11) 98812-3090',
      email: 'rafael.drummond@email.com',
      birthday: '1992-10-31',
      city: 'São Paulo, SP',
      notes: 'Envio SEDEX. Prefere peças pretas e conjuntos street.',
      since: '2024'
    },
    {
      id: 'c4',
      name: 'Matheus Costa',
      tier: 'Cliente',
      phone: '(31) 98409-1172',
      email: 'matheus.costa@email.com',
      birthday: '1998-02-20',
      city: 'Contagem, MG',
      notes: 'Retirada em Belo Horizonte.',
      since: '2025'
    }
  ],
  products: [
    { id: 'p1', name: 'Camiseta Oversized NGD Gold', sku: 'NGD-101', price: 219.90, cost: 78.00, stock: 16, minStock: 5, size: 'M / G / GG' },
    { id: 'p2', name: 'Conjunto Street Concept', sku: 'NGD-204', price: 489.90, cost: 195.00, stock: 3, minStock: 5, size: 'M / G' },
    { id: 'p3', name: 'Calça Cargo Tailored Preta', sku: 'NGD-309', price: 329.90, cost: 130.00, stock: 11, minStock: 5, size: '38 ao 44' },
    { id: 'p4', name: 'Jaqueta Bomber NGD Limited', sku: 'NGD-402', price: 549.90, cost: 220.00, stock: 2, minStock: 4, size: 'G / GG' },
    { id: 'p5', name: 'T-Shirt Pima Cotton Signature', sku: 'NGD-115', price: 189.90, cost: 64.00, stock: 24, minStock: 6, size: 'P / M / G' },
    { id: 'p6', name: 'Boné NGD Bordado Dourado', sku: 'NGD-501', price: 149.90, cost: 45.00, stock: 19, minStock: 5, size: 'Único' }
  ],
  sales: [
    {
      id: '#1084',
      clientId: 'c1',
      date: 'Hoje, 13:45',
      paymentMethod: 'PIX',
      installments: 1,
      discount: 0,
      total: 709.80,
      items: [
        { productId: 'p2', name: 'Conjunto Street Concept', qty: 1, price: 489.90 },
        { productId: 'p1', name: 'Camiseta Oversized NGD Gold', qty: 1, price: 219.90 }
      ]
    },
    {
      id: '#1083',
      clientId: 'c2',
      date: 'Hoje, 11:10',
      paymentMethod: 'Cartão de Crédito',
      installments: 3,
      discount: 0,
      total: 879.80,
      items: [
        { productId: 'p4', name: 'Jaqueta Bomber NGD Limited', qty: 1, price: 549.90 },
        { productId: 'p3', name: 'Calça Cargo Tailored Preta', qty: 1, price: 329.90 }
      ]
    },
    {
      id: '#1082',
      clientId: 'c3',
      date: 'Ontem, 18:20',
      paymentMethod: 'PIX',
      installments: 1,
      discount: 20,
      total: 599.70,
      items: [
        { productId: 'p1', name: 'Camiseta Oversized NGD Gold', qty: 2, price: 219.90 },
        { productId: 'p5', name: 'T-Shirt Pima Cotton Signature', qty: 1, price: 179.90 }
      ]
    },
    {
      id: '#1081',
      clientId: 'c1',
      date: '17 Out, 16:05',
      paymentMethod: 'Cartão de Débito',
      installments: 1,
      discount: 0,
      total: 479.80,
      items: [
        { productId: 'p3', name: 'Calça Cargo Tailored Preta', qty: 1, price: 329.90 },
        { productId: 'p6', name: 'Boné NGD Bordado Dourado', qty: 1, price: 149.90 }
      ]
    }
  ],
  cashflow: [
    { id: 'cf1', type: 'in', title: 'Pedido #1084 — Gabriel Henrique', category: 'Venda • PIX', amount: 709.80, date: 'Hoje, 13:45' },
    { id: 'cf2', type: 'in', title: 'Pedido #1083 — Lucas Matheus', category: 'Venda • Crédito 3x', amount: 879.80, date: 'Hoje, 11:10' },
    { id: 'cf3', type: 'out', title: 'Envios Correios / SEDEX Nacional', category: 'Logística', amount: 185.00, date: 'Ontem, 17:00' },
    { id: 'cf4', type: 'in', title: 'Pedido #1082 — Rafael Drummond', category: 'Venda • PIX', amount: 599.70, date: 'Ontem, 18:20' },
    { id: 'cf5', type: 'out', title: 'Fornecedor Malharia Premium', category: 'Produção', amount: 640.00, date: '17 Out' }
  ],
  crmLeads: [
    { id: 'l1', name: 'Gabriel Henrique', tag: 'Gold', phone: '(31) 99841-2210', value: 980.00, status: 'Reservou Drop Novo', action: 'Confirmar tamanho G da Jaqueta Bomber' },
    { id: 'l2', name: 'Pedro Henrique BH', tag: 'Plano VIP', phone: '(31) 99311-4090', value: 489.90, status: 'Em Negociação', action: 'Aguardando link de pagamento Conjunto Street' },
    { id: 'l3', name: 'Thiago Mendes (SP)', tag: 'Envio Brasil', phone: '(11) 97612-8800', value: 659.80, status: 'Cotação Frete', action: 'Enviar código de rastreio após confirmação' }
  ],
  // Vídeos de exemplo (sem src): publique os seus em Academy > "+ Vídeo".
  reels: [
    { id: 'r1', title: 'Como vender mais no Direct', caption: 'O passo a passo do atendimento que converte conversa em venda.', area: 'Vendas', src: '', ctaUrl: '', ctaLabel: 'Quero aderir ao curso', ctaClicks: 0 },
    { id: 'r2', title: 'Posicionamento de marca streetwear', caption: 'Como construir desejo em torno das peças exclusivas.', area: 'Branding', src: '', ctaUrl: '', ctaLabel: 'Quero aderir ao curso', ctaClicks: 0 },
    { id: 'r3', title: 'Giro de estoque na moda', caption: 'Grade, reposição e margem sem dinheiro parado.', area: 'Estoque', src: '', ctaUrl: '', ctaLabel: 'Quero aderir ao curso', ctaClicks: 0 }
  ],
  news: [
    { category: 'Coleção', title: 'Peças Oversized e conjuntos monocromáticos lideram pedidos no mês', date: 'Hoje', text: 'Clientes do Plano VIP responderam por 62% da saída das peças limitadas na primeira semana.' },
    { category: 'Operação', title: 'Envios para fora de MG cresceram 24% neste trimestre', date: 'Ontem', text: 'São Paulo, Rio de Janeiro e Brasília concentram o maior volume de pedidos nacionais.' }
  ]
};

const app = {
  state: JSON.parse(localStorage.getItem('ngd_concept_state_v4')) || initialData,
  currentScreen: 'dashboard',
  dashboardPeriod: '7d',
  salesFilter: 'Todas',
  searchQuery: '',
  cart: [],
  selectedClientForSale: 'c1',
  selectedPaymentMethod: 'PIX',
  selectedInstallments: 1,
  saleDiscount: 0,

  init() {
    const savedTheme = localStorage.getItem('ngd_theme') || 'black-gold';
    this.setTheme(savedTheme, false);
    this.updateBadges();
    this.navigate('dashboard');
    this.loadReelFiles();
  },

  setTheme(themeName, notify = true) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('ngd_theme', themeName);
    const btnBlack = document.getElementById('btnThemeBlack');
    const btnWhite = document.getElementById('btnThemeWhite');
    if (btnBlack && btnWhite) {
      btnBlack.classList.toggle('active', themeName === 'black-gold');
      btnWhite.classList.toggle('active', themeName === 'white-gold');
    }
    if (notify) {
      this.showToast(themeName === 'black-gold' ? 'Tema Escuro' : 'Tema Claro');
    }
  },

  toggleThemeQuick() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'black-gold' ? 'white-gold' : 'black-gold';
    this.setTheme(next, true);
    if (this.currentScreen === 'ajuste') this.navigate('ajuste');
  },

  saveState() {
    localStorage.setItem('ngd_concept_state_v4', JSON.stringify(this.state));
    this.updateBadges();
  },

  resetData() {
    localStorage.removeItem('ngd_concept_state_v4');
    this.state = JSON.parse(JSON.stringify(initialData));
    this.showToast('Dados da loja restaurados');
    this.updateBadges();
    this.navigate('dashboard');
  },

  formatBRL(val) {
    return Number(val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  },

  getTotalRevenue() {
    return this.state.sales.reduce((acc, s) => acc + s.total, 0);
  },

  getFinancialAnalytics() {
    let baseRevenue = 0;
    let baseCostCMV = 0;
    let baseTaxes = 0;
    let totalUnitsSold = 0;

    const feeRates = {
      'PIX': 0.009,
      'Cartão de Débito': 0.019,
      'Cartão de Crédito': 0.048,
      'Dinheiro': 0.0
    };

    const salesToAnalyze = this.dashboardPeriod === 'hoje'
      ? this.state.sales.filter(s => s.date.startsWith('Hoje') || s.date === 'Agora')
      : this.state.sales;

    salesToAnalyze.forEach(sale => {
      baseRevenue += sale.total;
      const rate = feeRates[sale.paymentMethod] !== undefined ? feeRates[sale.paymentMethod] : 0.03;
      baseTaxes += sale.total * (0.04 + rate);

      sale.items.forEach(item => {
        const prod = this.state.products.find(p => p.id === item.productId);
        const unitCost = prod ? prod.cost : item.price * 0.38;
        baseCostCMV += unitCost * item.qty;
        totalUnitsSold += item.qty;
      });
    });

    const multiplier = this.dashboardPeriod === '30d' ? 12 : 1;
    const revenue = baseRevenue * multiplier;
    const cmv = baseCostCMV * multiplier;
    const taxes = baseTaxes * multiplier;
    const grossProfit = Math.max(0, revenue - cmv);
    const netProfit = Math.max(0, revenue - cmv - taxes);

    const grossMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
    const netMarginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;
    const cmvPct = revenue > 0 ? (cmv / revenue) * 100 : 0;
    const taxPct = revenue > 0 ? (taxes / revenue) * 100 : 0;

    const roiPct = cmv > 0 ? (netProfit / cmv) * 100 : 0;
    const markup = cmv > 0 ? revenue / cmv : 0;
    const ordersCount = salesToAnalyze.length * multiplier;
    const avgTicket = ordersCount > 0 ? revenue / ordersCount : 0;

    const productProfitability = this.state.products.map(p => {
      const unitTax = p.price * 0.065;
      const unitNetProfit = p.price - p.cost - unitTax;
      const unitMarginPct = (unitNetProfit / p.price) * 100;
      const unitRoiPct = (unitNetProfit / p.cost) * 100;
      return {
        ...p,
        unitNetProfit,
        unitMarginPct,
        unitRoiPct
      };
    }).sort((a, b) => b.unitMarginPct - a.unitMarginPct);

    return {
      revenue,
      cmv,
      taxes,
      grossProfit,
      netProfit,
      grossMarginPct,
      netMarginPct,
      cmvPct,
      taxPct,
      roiPct,
      markup,
      ordersCount,
      totalUnitsSold: totalUnitsSold * multiplier,
      avgTicket,
      productProfitability
    };
  },

  getClientStats() {
    const map = {};
    this.state.clients.forEach(c => {
      map[c.id] = { ...c, totalSpent: 0, ordersCount: 0, salesHistory: [] };
    });
    this.state.sales.forEach(s => {
      if (map[s.clientId]) {
        map[s.clientId].totalSpent += s.total;
        map[s.clientId].ordersCount += 1;
        map[s.clientId].salesHistory.push(s);
      }
    });
    return Object.values(map).sort((a, b) => b.totalSpent - a.totalSpent);
  },

  updateBadges() {
    const lowStockCount = this.state.products.filter(p => p.stock <= p.minStock).length;
    const totalAlerts = this.state.notificationsRead ? lowStockCount : lowStockCount + 1;
    const badge = document.getElementById('notifBadgeCount');
    if (badge) {
      badge.textContent = totalAlerts;
      badge.style.display = totalAlerts > 0 ? 'flex' : 'none';
    }

    const prodTag = document.getElementById('drawerProductsCount');
    if (prodTag) prodTag.textContent = `${this.state.products.length} peças`;

    const currentMonth = this.getTotalRevenue() + 34200;
    const pct = Math.min(100, Math.round((currentMonth / this.state.monthlyGoal) * 100));
    const goalBadge = document.getElementById('drawerGoalBadge');
    if (goalBadge) goalBadge.textContent = `${pct}%`;
  },

  openNotificationsModal() {
    const lowStock = this.state.products.filter(p => p.stock <= p.minStock);
    const latestSale = this.state.sales[0];

    document.getElementById('genericModalTitle').textContent = 'Notificações e Alertas';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="section-bar" style="margin-bottom:4px">
        <span class="section-heading">Alertas Ativos (${lowStock.length + 1})</span>
        <button class="link-gold" onclick="app.markNotificationsRead()">Marcar lidas</button>
      </div>

      <div class="list-stack">
        ${lowStock.map(p => `
          <div class="row-card clickable" onclick="app.closeGenericModal(); app.navigate('produtos')">
            <div class="avatar-box" style="color:var(--danger);border-color:var(--danger)">!</div>
            <div class="row-main">
              <strong>Estoque Baixo: ${p.name}</strong>
              <span>Restam ${p.stock} un. na grade (${p.size})</span>
            </div>
            <div class="row-side">
              <span class="tag tag-danger">Repor</span>
            </div>
          </div>
        `).join('')}

        ${latestSale ? `
          <div class="row-card clickable" onclick="app.closeGenericModal(); app.openSaleDetailModal('${latestSale.id}')">
            <div class="avatar-box">R$</div>
            <div class="row-main">
              <strong>Venda Confirmada (${latestSale.id})</strong>
              <span>${latestSale.paymentMethod} • ${latestSale.date}</span>
            </div>
            <div class="row-side">
              <strong style="color:var(--gold)">${this.formatBRL(latestSale.total)}</strong>
            </div>
          </div>
        ` : ''}

        <div class="row-card clickable" onclick="app.closeGenericModal(); app.navigate('crm')">
          <div class="avatar-box">VIP</div>
          <div class="row-main">
            <strong>Follow-up Plano VIP</strong>
            <span>Gabriel Henrique reservou peça do drop</span>
          </div>
          <div class="row-side">
            <span class="tag tag-gold">CRM</span>
          </div>
        </div>
      </div>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  markNotificationsRead() {
    this.state.notificationsRead = true;
    this.saveState();
    this.closeGenericModal();
    this.showToast('Notificações marcadas como lidas');
  },

  toggleDrawer() {
    document.getElementById('sideDrawer').classList.toggle('open');
    document.getElementById('drawerBackdrop').classList.toggle('open');
  },

  closeDrawer() {
    document.getElementById('sideDrawer').classList.remove('open');
    document.getElementById('drawerBackdrop').classList.remove('open');
  },

  showToast(msg) {
    const container = document.getElementById('toastContainer');
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  },

  navigate(screen) {
    this.currentScreen = screen;
    if (screen !== 'visao360') this._v360Id = null;
    this.closeDrawer();

    document.querySelectorAll('.bottom-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.bottom === screen);
    });
    document.querySelectorAll('.drawer-link').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.screen === screen);
    });
    document.querySelectorAll('.jump-btn[data-pres]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.pres === screen);
    });

    const headers = {
      dashboard: ['GHOST', 'Dashboard'],
      vendas: ['HISTÓRICO COMERCIAL', 'Vendas'],
      fluxo: ['FINANCEIRO', 'Fluxo de Caixa'],
      ajuste: ['PREFERÊNCIAS', 'Ajustes'],
      clientes: ['CARTEIRA VIP & GOLD', 'Clientes'],
      visao360: ['PERFIL ANALÍTICO', 'Visão 360'],
      campanhas: ['DISPARO & TEMPLATES', 'Campanhas'],
      produtos: ['ESTOQUE DE PEÇAS', 'Produtos'],
      crm: ['RELACIONAMENTO', 'CRM & Plano VIP'],
      metas: ['DESEMPENHO MENSAL', 'Metas'],
      precificacao: ['MARGEM & MARKUP', 'Precificação'],
      academy: ['CURSOS NGD', 'Academy'],
      news: ['COMUNICADOS', 'News'],
      ajuda: ['SUPORTE', 'Ajuda']
    };

    const [sub, title] = headers[screen] || ['GHOST', 'Gestão'];
    document.getElementById('headerSubtitle').textContent = sub;
    document.getElementById('headerTitle').textContent = title;

    const vp = document.getElementById('appViewport');
    vp.scrollTop = 0;
    vp.classList.toggle('reels-mode', screen === 'academy');

    switch (screen) {
      case 'dashboard': vp.innerHTML = this.renderDashboard(); break;
      case 'vendas': vp.innerHTML = this.renderVendas(); break;
      case 'fluxo': vp.innerHTML = this.renderFluxo(); break;
      case 'clientes': vp.innerHTML = this.renderClientes(); break;
      case 'visao360': vp.innerHTML = this.renderVisao360(); break;
      case 'campanhas': vp.innerHTML = this.renderCampanhas(); break;
      case 'produtos': vp.innerHTML = this.renderProdutos(); break;
      case 'crm': vp.innerHTML = this.renderCRM(); break;
      case 'metas': vp.innerHTML = this.renderMetas(); break;
      case 'precificacao':
        vp.innerHTML = this.renderPrecificacao();
        this.recalcPricing();
        break;
      case 'academy': vp.innerHTML = this.renderAcademy(); break;
      case 'news': vp.innerHTML = this.renderNews(); break;
      case 'ajuda': vp.innerHTML = this.renderAjuda(); break;
      case 'ajuste': vp.innerHTML = this.renderAjuste(); break;
    }
  },

  /* ==================== 1. DASHBOARD LIMPO E ALINHADO ==================== */
  renderDashboard() {
    const fin = this.getFinancialAnalytics();
    const topClient = this.getClientStats()[0];

    return `
      <!-- Barra de Período Segmented Control + Botão Venda -->
      <div class="period-bar">
        <div class="segmented-control">
          ${[
            { id: 'hoje', label: 'Hoje' },
            { id: '7d', label: '7 Dias' },
            { id: '30d', label: '30 Dias' }
          ].map(p => `
            <button class="seg-btn ${this.dashboardPeriod === p.id ? 'active' : ''}"
                    onclick="app.dashboardPeriod='${p.id}'; app.navigate('dashboard')">
              ${p.label}
            </button>
          `).join('')}
        </div>
        <button class="btn-outline" style="border-color:var(--gold);color:var(--gold)" onclick="app.openNewSaleModal()">
          + Nova Venda
        </button>
      </div>

      <!-- Card Principal: Receita, Lucro Líquido, Margem e ROI -->
      <div class="summary-panel">
        <div class="summary-top">
          <span class="summary-label">Faturamento Bruto</span>
          <span class="tag tag-gold">${fin.ordersCount} pedidos • ${fin.totalUnitsSold} peças</span>
        </div>
        <div class="summary-value">${this.formatBRL(fin.revenue)}</div>
        <div class="summary-grid">
          <div class="summary-col">
            <span>Lucro Líquido</span>
            <strong style="color:var(--gold)">${this.formatBRL(fin.netProfit)}</strong>
          </div>
          <div class="summary-col">
            <span>Margem Líq.</span>
            <strong style="color:var(--success)">${fin.netMarginPct.toFixed(1)}%</strong>
          </div>
          <div class="summary-col">
            <span>Ticket Médio</span>
            <strong>${this.formatBRL(fin.avgTicket)}</strong>
          </div>
        </div>
      </div>

      <!-- Grade 2x2 Limpa: Rentabilidade (ROI), Margem Bruta, CMV e Taxas -->
      <div class="analytics-kpi-grid">
        <div class="analytics-kpi-box gold-highlight">
          <span class="kpi-label">Rentabilidade (ROI)</span>
          <div class="kpi-box-val" style="color:var(--gold)">+${fin.roiPct.toFixed(1)}%</div>
          <span class="kpi-box-sub">Markup médio: ${fin.markup.toFixed(2)}x</span>
        </div>

        <div class="analytics-kpi-box">
          <span class="kpi-label">Margem Bruta</span>
          <div class="kpi-box-val">${fin.grossMarginPct.toFixed(1)}%</div>
          <span class="kpi-box-sub">Lucro bruto: ${this.formatBRL(fin.grossProfit)}</span>
        </div>

        <div class="analytics-kpi-box">
          <span class="kpi-label">Custo Peças (CMV)</span>
          <div class="kpi-box-val">${this.formatBRL(fin.cmv)}</div>
          <span class="kpi-box-sub">${fin.cmvPct.toFixed(1)}% do faturamento</span>
        </div>

        <div class="analytics-kpi-box">
          <span class="kpi-label">Impostos &amp; Taxas</span>
          <div class="kpi-box-val" style="color:var(--danger)">${this.formatBRL(fin.taxes)}</div>
          <span class="kpi-box-sub">${fin.taxPct.toFixed(1)}% sobre vendas</span>
        </div>
      </div>

      <!-- Composição da Margem (Lista Vertical Limpa sem Quebra) -->
      <div class="card">
        <div class="section-bar">
          <span class="section-heading">Composição da Receita (DRE)</span>
          <button class="link-gold" onclick="app.navigate('precificacao')">Simular →</button>
        </div>
        <div class="dre-bar-stack">
          <div class="dre-segment-profit" style="width:${fin.netMarginPct}%"></div>
          <div class="dre-segment-cost" style="width:${fin.cmvPct}%"></div>
          <div class="dre-segment-tax" style="width:${fin.taxPct}%"></div>
        </div>
        <div class="dre-rows">
          <div class="dre-row">
            <span class="dre-row-left">
              <span class="dre-dot" style="background:var(--gold)"></span>
              Lucro Líquido Real
            </span>
            <span class="dre-row-right" style="color:var(--gold)">
              ${this.formatBRL(fin.netProfit)} (${fin.netMarginPct.toFixed(1)}%)
            </span>
          </div>
          <div class="dre-row">
            <span class="dre-row-left">
              <span class="dre-dot" style="background:var(--text-muted)"></span>
              Custo de Mercadoria (CMV)
            </span>
            <span class="dre-row-right">
              ${this.formatBRL(fin.cmv)} (${fin.cmvPct.toFixed(1)}%)
            </span>
          </div>
          <div class="dre-row">
            <span class="dre-row-left">
              <span class="dre-dot" style="background:var(--danger)"></span>
              Impostos &amp; Taxas de Cartão
            </span>
            <span class="dre-row-right" style="color:var(--danger)">
              ${this.formatBRL(fin.taxes)} (${fin.taxPct.toFixed(1)}%)
            </span>
          </div>
        </div>
      </div>

      <!-- Gráfico Receita vs Lucro -->
      <div class="card">
        <div class="section-bar">
          <span class="section-heading">Receita vs. Lucro (7 dias)</span>
          <span style="font-size:11px;color:var(--gold);font-weight:600;white-space:nowrap">■ Lucro Líquido</span>
        </div>
        <div class="chart-bars">
          ${[
            { d: 'Ter', rev: 52, prof: 29 },
            { d: 'Qua', rev: 68, prof: 38 },
            { d: 'Qui', rev: 58, prof: 31 },
            { d: 'Sex', rev: 86, prof: 49 },
            { d: 'Sáb', rev: 94, prof: 54 },
            { d: 'Dom', rev: 74, prof: 42 },
            { d: 'Hoje', rev: 98, prof: 56 }
          ].map(b => `
            <div class="chart-col">
              <div class="chart-track-dual">
                <div class="chart-fill-rev" style="height:${b.rev}%"></div>
                <div class="chart-fill-profit" style="height:${b.prof}%"></div>
              </div>
              <span>${b.d}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Rentabilidade por Peça -->
      <div class="card">
        <div class="section-bar">
          <span class="section-heading">Rentabilidade por Peça</span>
          <button class="link-gold" onclick="app.navigate('produtos')">Estoque →</button>
        </div>
        <div class="list-stack">
          ${fin.productProfitability.slice(0, 4).map(p => `
            <div class="row-card clickable" onclick="app.navigate('produtos')">
              <div class="row-main">
                <strong>${p.name}</strong>
                <span>Margem Líq: ${p.unitMarginPct.toFixed(1)}% • ROI: +${p.unitRoiPct.toFixed(0)}%</span>
              </div>
              <div class="row-side">
                <strong style="color:var(--gold)">+${this.formatBRL(p.unitNetProfit)}</strong>
                <span>lucro / un.</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Top Cliente Gold -->
      ${topClient ? `
        <div class="card">
          <div class="section-bar">
            <span class="section-heading">Top Cliente Gold</span>
            <button class="link-gold" onclick="app.navigate('clientes')">Ver Todos →</button>
          </div>
          <div class="row-card clickable" onclick="app.openClientModal('${topClient.id}')">
            <div class="avatar-box">1º</div>
            <div class="row-main">
              <strong>${topClient.name}</strong>
              <span>${topClient.tier} • ${topClient.ordersCount} pedidos • ${topClient.city}</span>
            </div>
            <div class="row-side">
              <strong style="color:var(--gold)">${this.formatBRL(topClient.totalSpent)}</strong>
              <span>Histórico</span>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  },

  renderSaleRow(sale) {
    const client = this.state.clients.find(c => c.id === sale.clientId);
    const clientName = client ? client.name : 'Venda Balcão';
    const summary = sale.items.map(i => `${i.qty}x ${i.name}`).join(', ');
    return `
      <div class="row-card clickable" onclick="app.openSaleDetailModal('${sale.id}')">
        <div class="avatar-box">${sale.id}</div>
        <div class="row-main">
          <strong>${clientName}</strong>
          <span>${summary}</span>
          <span style="color:var(--gold);font-weight:600">${sale.paymentMethod}${sale.installments > 1 ? ` ${sale.installments}x` : ''} • ${sale.date}</span>
        </div>
        <div class="row-side">
          <strong>${this.formatBRL(sale.total)}</strong>
          <span>Recibo</span>
        </div>
      </div>
    `;
  },

  /* ==================== 2. VENDAS ==================== */
  getFilteredSales() {
    return this.state.sales.filter(s => {
      const matchMethod = this.salesFilter === 'Todas' || s.paymentMethod === this.salesFilter;
      const client = this.state.clients.find(c => c.id === s.clientId);
      const hay = `${s.id} ${client ? client.name : ''} ${s.items.map(i => i.name).join(' ')}`.toLowerCase();
      const matchQuery = !this.searchQuery || hay.includes(this.searchQuery.toLowerCase());
      return matchMethod && matchQuery;
    });
  },

  renderVendas() {
    const methods = ['Todas', 'PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'];
    const filtered = this.getFilteredSales();
    const sum = filtered.reduce((a, b) => a + b.total, 0);

    return `
      <div class="card" style="display:flex;justify-content:space-between;align-items:center">
        <div id="salesSummaryBox">
          <span class="summary-label">Volume (${filtered.length} pedidos)</span>
          <strong style="display:block;font-size:20px;color:var(--gold);margin-top:2px">${this.formatBRL(sum)}</strong>
        </div>
        <button class="btn-gold" style="width:auto;padding:9px 14px" onclick="app.openNewSaleModal()">+ Nova Venda</button>
      </div>

      <input class="input-box" placeholder="Buscar por cliente, peça ou pedido..." value="${this.searchQuery}" oninput="app.onSearchSales(this.value)" />

      <div class="filter-strip">
        ${methods.map(m => `
          <button class="filter-btn ${this.salesFilter === m ? 'active' : ''}" onclick="app.salesFilter='${m}';app.navigate('vendas')">${m}</button>
        `).join('')}
      </div>

      <div class="list-stack" id="salesListContainer">
        ${filtered.length ? filtered.map(s => this.renderSaleRow(s)).join('') : `<div class="card">Nenhum pedido encontrado.</div>`}
      </div>
    `;
  },

  onSearchSales(query) {
    this.searchQuery = query;
    const filtered = this.getFilteredSales();
    const sum = filtered.reduce((a, b) => a + b.total, 0);
    const summaryBox = document.getElementById('salesSummaryBox');
    const listContainer = document.getElementById('salesListContainer');
    if (summaryBox) {
      summaryBox.innerHTML = `
        <span class="summary-label">Volume (${filtered.length} pedidos)</span>
        <strong style="display:block;font-size:20px;color:var(--gold);margin-top:2px">${this.formatBRL(sum)}</strong>
      `;
    }
    if (listContainer) {
      listContainer.innerHTML = filtered.length
        ? filtered.map(s => this.renderSaleRow(s)).join('')
        : `<div class="card">Nenhum pedido encontrado.</div>`;
    }
  },

  openSaleDetailModal(saleId) {
    const sale = this.state.sales.find(s => s.id === saleId);
    if (!sale) return;
    const client = this.state.clients.find(c => c.id === sale.clientId);

    let saleCost = 0;
    sale.items.forEach(i => {
      const p = this.state.products.find(x => x.id === i.productId);
      saleCost += (p ? p.cost : i.price * 0.38) * i.qty;
    });
    const saleNetProfit = sale.total - saleCost - (sale.total * 0.055);
    const saleMargin = (saleNetProfit / sale.total) * 100;

    document.getElementById('genericModalTitle').textContent = `Pedido ${sale.id}`;
    document.getElementById('genericModalBody').innerHTML = `
      <div class="card">
        <div class="dre-rows">
          <div class="dre-row">
            <span class="dre-row-left">Cliente</span>
            <span class="dre-row-right">${client ? client.name : 'Balcão'}</span>
          </div>
          <div class="dre-row">
            <span class="dre-row-left">Data</span>
            <span class="dre-row-right">${sale.date}</span>
          </div>
          <div class="dre-row">
            <span class="dre-row-left">Pagamento</span>
            <span class="tag tag-gold">${sale.paymentMethod}${sale.installments > 1 ? ` (${sale.installments}x)` : ''}</span>
          </div>
          <div class="dre-row" style="padding-top:6px;border-top:1px solid var(--border-line)">
            <span class="dre-row-left">Lucro Líquido</span>
            <span class="dre-row-right" style="color:var(--success)">${this.formatBRL(saleNetProfit)} (${saleMargin.toFixed(1)}%)</span>
          </div>
        </div>
      </div>

      <span class="section-heading">Peças do Pedido</span>
      <div class="list-stack">
        ${sale.items.map(i => `
          <div class="row-card">
            <div class="row-main">
              <strong>${i.name}</strong>
              <span>${i.qty} un. × ${this.formatBRL(i.price)}</span>
            </div>
            <strong>${this.formatBRL(i.qty * i.price)}</strong>
          </div>
        `).join('')}
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid var(--border-line)">
        <span style="font-size:13px;font-weight:600">Total Faturado</span>
        <strong style="font-size:18px;color:var(--gold)">${this.formatBRL(sale.total)}</strong>
      </div>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  /* ==================== 3. CADASTRAR VENDAS ==================== */
  openNewSaleModal(clientId = null) {
    if (clientId) this.selectedClientForSale = clientId;
    if (this.cart.length === 0 && this.state.products.length > 0) {
      this.cart = [{ productId: this.state.products[0].id, qty: 1 }];
    }
    this._pickerOpen = false;
    this._newClientOpen = false;
    this.renderNewSaleModalContent();
    document.getElementById('saleModalOverlay').classList.add('open');
  },

  closeNewSaleModal() {
    document.getElementById('saleModalOverlay').classList.remove('open');
  },

  renderNewSaleModalContent() {
    let subtotal = 0;
    let totalCost = 0;
    this.cart.forEach(item => {
      const p = this.state.products.find(x => x.id === item.productId);
      if (p) {
        subtotal += p.price * item.qty;
        totalCost += p.cost * item.qty;
      }
    });
    const total = Math.max(0, subtotal - (Number(this.saleDiscount) || 0));
    const estProfit = Math.max(0, total - totalCost - (total * 0.055));
    const estMargin = total > 0 ? (estProfit / total) * 100 : 0;

    const methods = ['PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'];

    document.getElementById('saleModalBody').innerHTML = `
      ${this.renderClientPicker()}

      <div class="field-group">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <label>Peças Selecionadas</label>
          <button class="link-gold" onclick="app.addCartItem()">+ Adicionar peça</button>
        </div>
        <div class="list-stack" style="margin-top:4px">
          ${this.cart.map((item, idx) => {
            const prod = this.state.products.find(p => p.id === item.productId) || this.state.products[0];
            return `
              <div class="row-card" style="padding:8px;gap:8px">
                <select class="select-box" style="padding:7px;font-size:12px;flex:1" onchange="app.cart[${idx}].productId=this.value;app.renderNewSaleModalContent()">
                  ${this.state.products.map(p => `
                    <option value="${p.id}" ${p.id === item.productId ? 'selected' : ''}>
                      ${p.name} (${this.formatBRL(p.price)})
                    </option>
                  `).join('')}
                </select>
                <div class="stepper">
                  <button class="step-btn" onclick="app.updateCartQty(${idx}, -1)">-</button>
                  <strong style="font-size:12.5px;min-width:16px;text-align:center">${item.qty}</strong>
                  <button class="step-btn" onclick="app.updateCartQty(${idx}, 1)">+</button>
                </div>
                <strong style="font-size:12px;min-width:64px;text-align:right">${this.formatBRL(prod.price * item.qty)}</strong>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="field-group">
        <label>Forma de Pagamento</label>
        <div class="pay-grid">
          ${methods.map(m => `
            <div class="pay-tile ${this.selectedPaymentMethod === m ? 'selected' : ''}" onclick="app.selectedPaymentMethod='${m}';app.renderNewSaleModalContent()">
              ${m}
            </div>
          `).join('')}
        </div>
      </div>

      ${this.selectedPaymentMethod === 'Cartão de Crédito' ? `
        <div class="field-group">
          <label>Parcelamento</label>
          <select class="select-box" onchange="app.selectedInstallments=Number(this.value);app.renderNewSaleModalContent()">
            ${[1, 2, 3, 4, 6].map(n => `
              <option value="${n}" ${this.selectedInstallments === n ? 'selected' : ''}>
                ${n}x de ${this.formatBRL(total / n)} sem juros
              </option>
            `).join('')}
          </select>
        </div>
      ` : ''}

      <div class="card" style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
        <div>
          <span class="summary-label">Total a Receber</span>
          <strong style="display:block;font-size:20px;color:var(--gold)">${this.formatBRL(total)}</strong>
          <span style="font-size:11px;color:var(--success)">Lucro Líq: ${this.formatBRL(estProfit)} (${estMargin.toFixed(0)}%)</span>
        </div>
        <button class="btn-gold" style="width:auto;padding:11px 20px" onclick="app.confirmNewSale()">Concluir Venda</button>
      </div>
    `;
  },

  renderClientPicker() {
    const clients = this.state.clients;
    const sel = clients.find(c => c.id === this.selectedClientForSale) || clients[0] || { name: 'Selecione um cliente', tier: '' };
    const chevron = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(${this._pickerOpen ? 180 : 0}deg)"><polyline points="6 9 12 15 18 9"/></svg>`;
    const check = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    const tiers = ['Cliente', 'Plano VIP', 'Gold'];

    return `
      <div class="field-group">
        <label>Cliente</label>
        <div class="pick-group">
          <button class="pick-current" onclick="app.toggleClientPicker()">
            <span><strong>${this.esc(sel.name)}</strong><small>${this.esc(sel.tier)}</small></span>
            ${chevron}
          </button>
          ${this._pickerOpen ? `
            <div class="pick-list">
              ${clients.map(c => `
                <button class="pick-item ${c.id === sel.id ? 'selected' : ''}" onclick="app.pickClient('${c.id}')">
                  <span>${this.esc(c.name)}<small>${this.esc(c.tier)}</small></span>
                  ${c.id === sel.id ? check : ''}
                </button>`).join('')}
              <button class="pick-item pick-new" onclick="app.toggleInlineClient()">
                <span>${this._newClientOpen ? '− Cancelar novo cliente' : '+ Novo cliente'}</span>
              </button>
              ${this._newClientOpen ? `
                <div class="pick-form">
                  <input id="scName" class="input-box" placeholder="Nome do cliente" />
                  <input id="scPhone" class="input-box" placeholder="WhatsApp (31) 99999-0000" inputmode="tel" />
                  <div class="segmented-control" style="align-self:flex-start">
                    ${tiers.map(t => `<button class="seg-btn ${t === (this._newTier || 'Cliente') ? 'active' : ''}" onclick="app.setInlineTier(this, '${t}')">${t}</button>`).join('')}
                  </div>
                  <button class="btn-gold" onclick="app.saveInlineClient()">Cadastrar e selecionar</button>
                </div>` : ''}
            </div>` : ''}
        </div>
      </div>`;
  },

  toggleClientPicker() {
    this._pickerOpen = !this._pickerOpen;
    if (!this._pickerOpen) this._newClientOpen = false;
    this.renderNewSaleModalContent();
  },

  pickClient(id) {
    this.selectedClientForSale = id;
    this._pickerOpen = false;
    this._newClientOpen = false;
    this.renderNewSaleModalContent();
  },

  toggleInlineClient() {
    this._newClientOpen = !this._newClientOpen;
    this._newTier = 'Cliente';
    this.renderNewSaleModalContent();
  },

  setInlineTier(btn, tier) {
    this._newTier = tier;
    btn.parentElement.querySelectorAll('.seg-btn').forEach(b => b.classList.toggle('active', b === btn));
  },

  saveInlineClient() {
    const name = document.getElementById('scName').value.trim();
    if (!name) return this.showToast('Informe o nome do cliente');
    const id = `c-${Date.now()}`;
    this.state.clients.push({
      id,
      name,
      tier: this._newTier || 'Cliente',
      phone: document.getElementById('scPhone').value.trim() || '(31) 99000-0000',
      email: 'cliente@ngdconcept.com.br',
      city: 'Belo Horizonte, MG',
      notes: 'Cadastrado durante a venda.',
      since: '2026'
    });
    this.saveState();
    this.showToast('Cliente cadastrado');
    this.pickClient(id);
  },

  addCartItem() {
    this.cart.push({ productId: this.state.products[0].id, qty: 1 });
    this.renderNewSaleModalContent();
  },

  updateCartQty(idx, delta) {
    this.cart[idx].qty += delta;
    if (this.cart[idx].qty <= 0) this.cart.splice(idx, 1);
    if (this.cart.length === 0) this.cart.push({ productId: this.state.products[0].id, qty: 1 });
    this.renderNewSaleModalContent();
  },

  confirmNewSale() {
    let subtotal = 0;
    const items = [];
    this.cart.forEach(cItem => {
      const p = this.state.products.find(x => x.id === cItem.productId);
      if (!p) return;
      p.stock = Math.max(0, p.stock - cItem.qty);
      subtotal += p.price * cItem.qty;
      items.push({ productId: p.id, name: p.name, qty: cItem.qty, price: p.price });
    });

    const discount = Number(this.saleDiscount) || 0;
    const total = Math.max(0, subtotal - discount);
    const id = `#${1085 + this.state.sales.length}`;
    const client = this.state.clients.find(c => c.id === this.selectedClientForSale);

    this.state.sales.unshift({
      id,
      clientId: this.selectedClientForSale,
      date: 'Agora',
      paymentMethod: this.selectedPaymentMethod,
      installments: this.selectedPaymentMethod === 'Cartão de Crédito' ? this.selectedInstallments : 1,
      discount,
      total,
      items
    });

    this.state.cashflow.unshift({
      id: `cf-${Date.now()}`,
      type: 'in',
      title: `Pedido ${id} — ${client ? client.name : 'Cliente'}`,
      category: `Venda • ${this.selectedPaymentMethod}`,
      amount: total,
      date: 'Agora'
    });

    this.cart = [{ productId: this.state.products[0].id, qty: 1 }];
    this.saleDiscount = 0;
    this.saveState();
    this.closeNewSaleModal();
    this.showToast(`Venda ${id} registrada`);
    this.navigate(this.currentScreen);
  },

  /* ==================== 4. CLIENTES ==================== */
  renderClientes() {
    const ranked = this.getClientStats();

    return `
      <div class="section-bar">
        <span class="section-heading">Ranking Top Clientes</span>
        <button class="btn-outline" onclick="app.openNewClientModal()">+ Novo Cliente</button>
      </div>

      <div class="list-stack">
        ${ranked.map((c, idx) => `
          <div class="row-card clickable" onclick="app.openClientModal('${c.id}')">
            <div class="avatar-box">${idx + 1}º</div>
            <div class="row-main">
              <strong>${c.name}</strong>
              <span>${c.tier} • ${c.phone} • ${c.city}</span>
            </div>
            <div class="row-side">
              <strong style="color:var(--gold)">${this.formatBRL(c.totalSpent)}</strong>
              <span>${c.ordersCount} pedidos</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  openClientModal(clientId) {
    const client = this.getClientStats().find(c => c.id === clientId);
    if (!client) return;

    document.getElementById('genericModalTitle').textContent = client.name;
    document.getElementById('genericModalBody').innerHTML = `
      <div class="card">
        <div class="section-bar">
          <span class="tag tag-gold">${client.tier} • Desde ${client.since}</span>
          <strong style="color:var(--gold);font-size:15px">${this.formatBRL(client.totalSpent)}</strong>
        </div>
        <div style="font-size:12.5px;display:flex;flex-direction:column;gap:5px;color:var(--text-muted)">
          <div><strong style="color:var(--text-main)">Telefone:</strong> ${client.phone}</div>
          <div><strong style="color:var(--text-main)">E-mail:</strong> ${client.email}</div>
          <div><strong style="color:var(--text-main)">Cidade:</strong> ${client.city}</div>
          <div><strong style="color:var(--text-main)">Aniversário:</strong> ${client.birthday ? this.fmtBirthday(client.birthday) : 'não informado'}</div>
          <div><strong style="color:var(--text-main)">Preferências:</strong> ${client.notes}</div>
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn-gold" style="padding:9px" onclick="app.closeGenericModal();app.openNewSaleModal('${client.id}')">Nova Venda</button>
          <button class="btn-outline" style="flex:1" onclick="app.showToast('Abrindo WhatsApp de ${client.name}')">WhatsApp</button>
        </div>
      </div>

      <span class="section-heading" style="margin-top:4px">Histórico de Vendas (${client.salesHistory.length})</span>
      <div class="list-stack">
        ${client.salesHistory.length ? client.salesHistory.map(s => `
          <div class="row-card">
            <div class="row-main">
              <strong>Pedido ${s.id} • ${s.date}</strong>
              <span>${s.items.map(i => `${i.qty}x ${i.name}`).join(', ')}</span>
            </div>
            <strong>${this.formatBRL(s.total)}</strong>
          </div>
        `).join('') : `<div class="card">Sem compras registradas.</div>`}
      </div>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  openNewClientModal() {
    document.getElementById('genericModalTitle').textContent = 'Novo Cliente';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="field-group">
        <label>Nome Completo</label>
        <input id="ncName" class="input-box" placeholder="Nome do cliente" />
      </div>
      <div class="field-group">
        <label>WhatsApp</label>
        <input id="ncPhone" class="input-box" placeholder="(31) 99999-0000" />
      </div>
      <div class="field-group">
        <label>Data de aniversário</label>
        <input id="ncBirth" type="date" class="input-box" />
      </div>
      <div class="field-group">
        <label>Categoria</label>
        <select id="ncTier" class="select-box">
          <option value="Gold">Gold</option>
          <option value="Plano VIP">Plano VIP</option>
          <option value="Cliente">Cliente</option>
        </select>
      </div>
      <div class="field-group">
        <label>Cidade / Estado</label>
        <input id="ncCity" class="input-box" placeholder="Belo Horizonte, MG" />
      </div>
      <div class="field-group">
        <label>Medidas / Observações</label>
        <input id="ncNotes" class="input-box" placeholder="Ex: Camiseta G, Calça 42" />
      </div>
      <button class="btn-gold" onclick="app.saveNewClient()">Salvar Cadastro</button>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  saveNewClient() {
    const name = document.getElementById('ncName').value.trim();
    if (!name) return this.showToast('Informe o nome do cliente');
    this.state.clients.push({
      id: `c-${Date.now()}`,
      name,
      tier: document.getElementById('ncTier').value,
      phone: document.getElementById('ncPhone').value.trim() || '(31) 99000-0000',
      email: 'cliente@ngdconcept.com.br',
      birthday: document.getElementById('ncBirth').value || '',
      city: document.getElementById('ncCity').value.trim() || 'Belo Horizonte, MG',
      notes: document.getElementById('ncNotes').value.trim() || 'Cadastrado via sistema.',
      since: '2026'
    });
    this.saveState();
    this.closeGenericModal();
    this.showToast('Cliente cadastrado');
    this.navigate('clientes');
  },

  /* ==================== 4.1 VISÃO 360 ==================== */
  _f360: 'todos',

  fmtBirthday(iso) {
    const [, m, d] = String(iso).split('-');
    return d && m ? `${d}/${m}` : '';
  },

  // Dias até o próximo aniversário e idade que a pessoa fará
  birthdayInfo(iso) {
    if (!iso) return null;
    const [y, m, d] = iso.split('-').map(Number);
    if (!m || !d) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let next = new Date(today.getFullYear(), m - 1, d);
    if (next < today) next = new Date(today.getFullYear() + 1, m - 1, d);
    const days = Math.round((next - today) / 86400000);
    return { days, age: y ? next.getFullYear() - y : null };
  },

  productCategory(name) {
    const n = name.toLowerCase();
    if (n.includes('camiseta') || n.includes('t-shirt')) return 'Camisetas';
    if (n.includes('calça')) return 'Calças';
    if (n.includes('conjunto')) return 'Conjuntos';
    if (n.includes('jaqueta')) return 'Jaquetas';
    if (n.includes('boné')) return 'Bonés';
    return name.split(' ')[0];
  },

  getClient360() {
    const top = obj => Object.entries(obj).sort((a, b) => b[1] - a[1])[0] || null;
    return this.getClientStats().map((c, i) => {
      const prod = {}, cat = {}, pay = {};
      c.salesHistory.forEach(sale => {
        pay[sale.paymentMethod] = (pay[sale.paymentMethod] || 0) + 1;
        sale.items.forEach(it => {
          prod[it.name] = (prod[it.name] || 0) + it.qty;
          const k = this.productCategory(it.name);
          cat[k] = (cat[k] || 0) + it.qty;
        });
      });
      return {
        ...c,
        rank: i + 1,
        // as vendas são gravadas da mais recente para a mais antiga
        lastSale: c.salesHistory[0] || null,
        topProduct: top(prod),
        topCategory: top(cat),
        topPayment: top(pay),
        avgTicket: c.ordersCount ? c.totalSpent / c.ordersCount : 0,
        bday: this.birthdayInfo(c.birthday)
      };
    });
  },

  suggestCampaign(c) {
    const first = c.name.split(' ')[0];
    const store = this.state.storeName;
    if (c.bday && c.bday.days <= 30) {
      const when = c.bday.days === 0 ? 'hoje' : c.bday.days === 1 ? 'amanhã' : `em ${c.bday.days} dias`;
      return { label: 'Aniversário', why: `Faz aniversário ${when}`, text: `Oi ${first}! Seu aniversário está chegando e a ${store} preparou um presente especial pra você. Posso te mandar?` };
    }
    if (!c.ordersCount) {
      return { label: 'Primeira compra', why: 'Ainda não comprou', text: `Oi ${first}! Separei peças da ${store} que combinam com você. Quer ver?` };
    }
    const fav = c.topCategory ? c.topCategory[0].toLowerCase() : 'peças';
    if (c.tier === 'Gold' || c.tier === 'Plano VIP') {
      return { label: 'Lançamento exclusivo', why: `${c.tier} • gosta de ${fav}`, text: `Oi ${first}! Chegou um drop novo de ${fav} da ${store} e você tem acesso antecipado. Quer que eu reserve o seu tamanho?` };
    }
    return { label: 'Recompra', why: `Gosta de ${fav}`, text: `Oi ${first}! Chegaram novidades em ${fav} na ${store}. Quer dar uma olhada?` };
  },

  setFilter360(f) {
    this._f360 = f;
    this.navigate('visao360');
  },

  setBirthday(id, value) {
    const c = this.state.clients.find(x => x.id === id);
    if (!c) return;
    c.birthday = value;
    this.saveState();
    this.navigate('visao360');
  },

  sendCampaign(id) {
    const c = this.getClient360().find(x => x.id === id);
    if (!c) return;
    let num = String(c.phone).replace(/\D/g, '');
    if (num.length <= 11) num = `55${num}`;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(this.suggestCampaign(c).text)}`, '_blank', 'noopener');
  },

  initials(name) {
    return this.esc(name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase());
  },

  daysLabel(d) {
    return d === 0 ? 'hoje' : d === 1 ? 'amanhã' : `em ${d} dias`;
  },

  openVisao360(id) {
    this._v360Id = id;
    this.navigate('visao360');
  },

  closeVisao360() {
    this._v360Id = null;
    this.navigate('visao360');
  },

  renderVisao360() {
    const all = this.getClient360();
    const detail = this._v360Id && all.find(c => c.id === this._v360Id);
    return detail ? this.renderVisao360Detail(detail) : this.renderVisao360List(all);
  },

  renderVisao360List(all) {
    const f = this._f360;
    const upcoming = all.filter(c => c.bday && c.bday.days <= 30).sort((a, b) => a.bday.days - b.bday.days);
    const list = f === 'todos' ? all : all.filter(c => c.tier === f);
    const tabs = [['todos', 'Todos'], ['Gold', 'Gold'], ['Plano VIP', 'VIP'], ['Cliente', 'Cliente']];

    const sold = {};
    this.state.sales.forEach(sale => sale.items.forEach(it => { sold[it.name] = (sold[it.name] || 0) + it.qty; }));
    const best = Object.entries(sold).sort((a, b) => b[1] - a[1])[0];

    return `
      <div class="v-summary">
        <div><strong>${all.length}</strong><span>clientes</span></div>
        <div><strong>${upcoming.length}</strong><span>aniversários em 30 dias</span></div>
        <div><strong>${all[0] ? this.esc(all[0].name.split(' ')[0]) : '—'}</strong><span>mais comprou</span></div>
      </div>

      ${upcoming.length ? `
        <div class="pr-section">
          <h4 class="pr-title">Próximos aniversários</h4>
          <div class="v-scroll">
            ${upcoming.map(c => `
              <button class="v-bday" onclick="app.openVisao360('${c.id}')">
                <span class="v-avatar ${c.bday.days <= 7 ? 'ring' : ''}">${this.initials(c.name)}</span>
                <strong>${this.esc(c.name.split(' ')[0])}</strong>
                <small>${this.daysLabel(c.bday.days)}</small>
              </button>`).join('')}
          </div>
        </div>` : ''}

      <div class="segmented-control" style="width:100%">
        ${tabs.map(([k, label]) => `<button class="seg-btn ${f === k ? 'active' : ''}" style="flex:1" onclick="app.setFilter360('${k}')">${label}</button>`).join('')}
      </div>

      <div class="pr-group">
        ${list.map(c => {
          const camp = this.suggestCampaign(c);
          return `
          <button class="v-row" onclick="app.openVisao360('${c.id}')">
            <span class="v-avatar sm">${this.initials(c.name)}</span>
            <span class="v-row-main">
              <strong>${this.esc(c.name)}</strong>
              <small>${c.topCategory ? `Gosta de ${this.esc(c.topCategory[0].toLowerCase())}` : this.esc(c.tier)}${c.lastSale ? ` • ${this.esc(c.lastSale.date)}` : ''}</small>
            </span>
            <span class="v-row-side">
              <small>${this.esc(camp.label)}</small>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l6 6-6 6"/></svg>
            </span>
          </button>`;
        }).join('') || '<div class="v-empty">Nenhum cliente neste filtro.</div>'}
      </div>
      ${best ? `<p class="pr-hint" style="text-align:center">Campeão de vendas: ${this.esc(best[0])} (${best[1]} un.)</p>` : ''}
    `;
  },

  renderVisao360Detail(c) {
    const camp = this.suggestCampaign(c);
    const line = (k, v) => `<div class="pr-line"><span class="pr-label">${k}</span><strong class="v-val">${v}</strong></div>`;

    return `
      <button class="v-back" onclick="app.closeVisao360()">
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 1L2 8l6 7"/></svg>
        Visão 360
      </button>

      <div class="v-profile">
        <span class="v-avatar lg">${this.initials(c.name)}</span>
        <h3>${this.esc(c.name)}</h3>
        <span>${this.esc(c.tier)} • ${c.rank}º no ranking • desde ${this.esc(c.since)}</span>
      </div>

      <div class="v-stats">
        <div><strong>${this.formatBRL(c.totalSpent)}</strong><span>total gasto</span></div>
        <div><strong>${c.ordersCount}</strong><span>${c.ordersCount === 1 ? 'pedido' : 'pedidos'}</span></div>
        <div><strong>${this.formatBRL(c.avgTicket)}</strong><span>ticket médio</span></div>
      </div>

      <div class="pr-section">
        <h4 class="pr-title">Perfil de compra</h4>
        <div class="pr-group">
          ${line('Última compra', c.lastSale ? `${this.esc(c.lastSale.date)}` : '—')}
          ${line('Mais comprado', c.topProduct ? `${this.esc(c.topProduct[0])} <small>${c.topProduct[1]}x</small>` : '—')}
          ${line('Gosta de', c.topCategory ? this.esc(c.topCategory[0]) : '—')}
          ${line('Pagamento', c.topPayment ? this.esc(c.topPayment[0]) : '—')}
        </div>
      </div>

      <div class="pr-section">
        <h4 class="pr-title">Aniversário</h4>
        <div class="pr-group">
          <div class="pr-line">
            <span class="pr-label">Data</span>
            <input class="kv-date" type="date" value="${this.esc(c.birthday || '')}" onchange="app.setBirthday('${c.id}', this.value)" />
          </div>
          ${c.bday ? line('Próximo', `${this.daysLabel(c.bday.days)}${c.bday.age ? ` <small>${c.bday.age} ${c.bday.age === 1 ? 'ano' : 'anos'}</small>` : ''}`) : ''}
        </div>
      </div>

      <div class="pr-section">
        <h4 class="pr-title">Campanha sugerida</h4>
        <div class="pr-group v-camp">
          <strong>${camp.label}</strong>
          <span>${this.esc(camp.why)}</span>
          <p>“${this.esc(camp.text)}”</p>
          <button class="btn-gold" onclick="app.sendCampaign('${c.id}')">Enviar no WhatsApp</button>
        </div>
      </div>

      <button class="v-link" onclick="app.openClientModal('${c.id}')">Ver cadastro completo</button>
    `;
  },

  /* ==================== 4.2 CAMPANHAS ==================== */
  _camp: { tab: 'disparo', step: 1, channel: 'whatsapp', templateId: null, audience: 'todos', selected: null, subject: '', body: '', sent: {} },
  _tplChannel: 'whatsapp',

  defaultTemplates() {
    return [
      { id: 't1', name: 'Aniversário', channel: 'whatsapp', subject: '', body: 'Oi {nome}! Seu aniversário está chegando e a {loja} preparou um presente especial pra você. Posso te mandar?' },
      { id: 't2', name: 'Lançamento exclusivo', channel: 'whatsapp', subject: '', body: 'Oi {nome}! Chegou um drop novo de {categoria} na {loja} e você tem acesso antecipado. Quer que eu reserve o seu tamanho?' },
      { id: 't3', name: 'Recompra', channel: 'whatsapp', subject: '', body: 'Oi {nome}! Vi que você curte {produto}. Chegaram novidades parecidas na {loja}. Quer dar uma olhada?' },
      { id: 't4', name: 'Primeira compra', channel: 'whatsapp', subject: '', body: 'Oi {nome}! Separei peças da {loja} que combinam com você. Quer ver?' },
      { id: 't5', name: 'Novidades da coleção', channel: 'email', subject: 'Novidades da {loja} para você, {nome}', body: 'Olá, {nome}!\n\nA nova coleção da {loja} acabou de chegar e separamos peças de {categoria} que combinam com você.\n\nResponda este e-mail ou chame no WhatsApp para reservar o seu tamanho.\n\nAbraço,\nEquipe {loja}' },
      { id: 't6', name: 'Feliz aniversário', channel: 'email', subject: 'Feliz aniversário, {nome}!', body: 'Olá, {nome}!\n\nA equipe da {loja} deseja um feliz aniversário. Preparamos um presente especial para você comemorar com estilo.\n\nÉ só responder este e-mail para resgatar.\n\nAbraço,\nEquipe {loja}' }
    ];
  },

  getTemplates() {
    if (!Array.isArray(this.state.templates)) this.state.templates = this.defaultTemplates();
    return this.state.templates;
  },

  getCampLog() {
    if (!Array.isArray(this.state.campaignLog)) this.state.campaignLog = [];
    return this.state.campaignLog;
  },

  fillTemplate(text, c) {
    const first = c ? c.name.split(' ')[0] : 'cliente';
    return String(text || '')
      .replace(/\{nome\}/g, first)
      .replace(/\{loja\}/g, this.state.storeName)
      .replace(/\{categoria\}/g, c && c.topCategory ? c.topCategory[0].toLowerCase() : 'novidades')
      .replace(/\{produto\}/g, c && c.topProduct ? c.topProduct[0] : 'nossas peças');
  },

  campContactable(c) {
    return this._camp.channel === 'whatsapp'
      ? String(c.phone).replace(/\D/g, '').length >= 10
      : /@/.test(c.email || '');
  },

  campRecipients() {
    const st = this._camp;
    return this.getClient360().filter(c => this.campContactable(c) && (!st.selected || st.selected[c.id]));
  },

  campAudienceSize(key) {
    return this.getClient360().filter(c => key === 'todos' ? true : key === 'aniversario' ? (c.bday && c.bday.days <= 30) : c.tier === key).length;
  },

  setCamp(patch) {
    Object.assign(this._camp, patch);
    this.navigate('campanhas');
  },

  setCampChannel(ch) {
    const first = this.getTemplates().find(t => t.channel === ch);
    this._camp.channel = ch;
    this._camp.selected = null;
    this._camp.audience = 'todos';
    this._camp.sent = {};
    this._camp.templateId = first ? first.id : null;
    this._camp.subject = first ? first.subject : '';
    this._camp.body = first ? first.body : '';
    this.navigate('campanhas');
  },

  selectCampTemplate(id) {
    const t = this.getTemplates().find(x => x.id === id);
    if (!t) return;
    Object.assign(this._camp, { templateId: id, subject: t.subject || '', body: t.body, sent: {} });
    this.navigate('campanhas');
  },

  insertVar(targetId, v) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const a = el.selectionStart ?? el.value.length;
    const b = el.selectionEnd ?? a;
    el.value = el.value.slice(0, a) + v + el.value.slice(b);
    el.focus();
    el.setSelectionRange(a + v.length, a + v.length);
    el.dispatchEvent(new Event('input'));
  },

  varChips(targetId) {
    return `<div class="camp-vars">${['{nome}', '{loja}', '{categoria}', '{produto}'].map(v =>
      `<button type="button" onclick="app.insertVar('${targetId}', '${v}')">${v}</button>`).join('')}</div>`;
  },

  onCampInput(field, el) {
    this._camp[field] = el.value;
    this._camp.sent = {};
    const sample = this.campRecipients()[0];
    const box = document.getElementById('campPreview');
    if (box) box.innerHTML = this.campPreviewHtml(sample);
  },

  campPreviewHtml(sample) {
    const st = this._camp;
    if (!sample) return '<span class="pr-hint">Nenhum cliente com contato para este público.</span>';
    const subj = st.channel === 'email' ? `<strong>${this.esc(this.fillTemplate(st.subject, sample))}</strong>` : '';
    return `<small>Prévia para ${this.esc(sample.name)}</small>${subj}<p>${this.esc(this.fillTemplate(st.body, sample))}</p>`;
  },

  renderCampanhas() {
    const st = this._camp;
    if (st.templateId === null && !st.body) {
      const first = this.getTemplates().find(t => t.channel === st.channel);
      if (first) Object.assign(st, { templateId: first.id, subject: first.subject || '', body: first.body });
    }
    const tabs = [['disparo', 'Disparo'], ['templates', 'Templates'], ['historico', 'Histórico']];
    const body = st.tab === 'templates' ? this.renderCampTemplates()
      : st.tab === 'historico' ? this.renderCampHistory()
      : this.renderCampDisparo();
    return `
      <div class="segmented-control" style="width:100%">
        ${tabs.map(([k, l]) => `<button class="seg-btn ${st.tab === k ? 'active' : ''}" style="flex:1" onclick="app.setCamp({tab:'${k}'})">${l}</button>`).join('')}
      </div>
      ${body}
    `;
  },

  setCampStep(n) {
    const st = this._camp;
    if (n >= 2 && !st.templateId && !st.body.trim()) return this.showToast('Escolha um template');
    if (n === 3 && !st.body.trim()) return this.showToast('Escreva a mensagem');
    st.step = n;
    this.navigate('campanhas');
  },

  toggleCampClient(id) {
    const st = this._camp;
    if (!st.selected) {
      st.selected = {};
      this.getClient360().filter(c => this.campContactable(c)).forEach(c => { st.selected[c.id] = true; });
    }
    st.selected[id] = !st.selected[id];
    st.sent = {};
    this.navigate('campanhas');
  },

  setCampAudience(key) {
    const st = this._camp;
    st.audience = key;
    st.selected = {};
    this.getClient360().forEach(c => {
      const inAud = key === 'todos' ? true : key === 'aniversario' ? (c.bday && c.bday.days <= 30) : c.tier === key;
      if (inAud && this.campContactable(c)) st.selected[c.id] = true;
    });
    st.sent = {};
    this.navigate('campanhas');
  },

  renderCampDisparo() {
    const st = this._camp;
    const steps = ['Template', 'Mensagem', 'Clientes'];
    const stepper = `
      <div class="camp-steps">
        ${steps.map((l, i) => `<button class="${st.step === i + 1 ? 'on' : st.step > i + 1 ? 'done' : ''}" onclick="app.setCampStep(${i + 1})"><i>${i + 1}</i>${l}</button>`).join('')}
      </div>`;
    const check = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    const chevron = `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l6 6-6 6"/></svg>`;

    if (st.step === 1) {
      const tpls = this.getTemplates().filter(t => t.channel === st.channel);
      return `
        ${stepper}
        <div class="segmented-control" style="width:100%">
          <button class="seg-btn ${st.channel === 'whatsapp' ? 'active' : ''}" style="flex:1" onclick="app.setCampChannel('whatsapp')">WhatsApp</button>
          <button class="seg-btn ${st.channel === 'email' ? 'active' : ''}" style="flex:1" onclick="app.setCampChannel('email')">E-mail</button>
        </div>
        <div class="pr-section">
          <h4 class="pr-title">Qual template usar?</h4>
          <div class="pr-group">
            ${tpls.map(t => `
              <button class="v-row" onclick="app.selectCampTemplate('${t.id}')">
                <span class="v-row-main">
                  <strong>${this.esc(t.name)}</strong>
                  <small>${this.esc(t.body.replace(/\s+/g, ' '))}</small>
                </span>
                <span class="v-row-side" style="color:var(--gold)">${t.id === st.templateId ? check : ''}</span>
              </button>`).join('')}
            <button class="v-row" onclick="app.openTemplateEditor(null)">
              <span class="v-row-main"><strong style="color:var(--gold);font-weight:500">+ Novo template</strong></span>
            </button>
          </div>
        </div>
        <button class="btn-gold" onclick="app.setCampStep(2)">Continuar</button>
      `;
    }

    if (st.step === 2) {
      const sample = this.getClient360().find(c => this.campContactable(c)) || this.getClient360()[0];
      return `
        ${stepper}
        <div class="pr-section">
          <h4 class="pr-title">Mensagem</h4>
          <div class="pr-group camp-compose">
            ${st.channel === 'email' ? `<input id="campSubject" class="camp-field" placeholder="Assunto" value="${this.esc(st.subject)}" oninput="app.onCampInput('subject', this)" />` : ''}
            <textarea id="campBody" class="camp-field camp-text" rows="5" placeholder="Escreva a mensagem..." oninput="app.onCampInput('body', this)">${this.esc(st.body)}</textarea>
            ${this.varChips('campBody')}
          </div>
          <button class="v-link" style="align-self:flex-start" onclick="app.openTemplateEditor(null, true)">Salvar como template</button>
        </div>
        <div class="camp-preview" id="campPreview">${this.campPreviewHtml(sample)}</div>
        <div class="camp-nav">
          <button class="btn-outline" onclick="app.setCampStep(1)">Voltar</button>
          <button class="btn-gold" onclick="app.setCampStep(3)">Continuar</button>
        </div>
      `;
    }

    const all = this.getClient360();
    const rec = this.campRecipients();
    const audiences = [['todos', 'Todos'], ['aniversario', 'Aniversariantes'], ['Gold', 'Gold'], ['Plano VIP', 'VIP'], ['Cliente', 'Cliente']];
    const wa = st.channel === 'whatsapp';
    return `
      ${stepper}
      <div class="v-scroll" style="gap:8px;padding:0 2px">
        ${audiences.map(([k, l]) => `<button class="filter-btn ${st.audience === k ? 'active' : ''}" onclick="app.setCampAudience('${k}')">${l}</button>`).join('')}
      </div>
      <div class="pr-section">
        <h4 class="pr-title">Quem vai receber? (${rec.length} de ${all.length})</h4>
        <div class="pr-group">
          ${all.map(c => {
            const ok = this.campContactable(c);
            const on = ok && (!st.selected || st.selected[c.id]);
            return `
            <button class="v-row" ${ok ? `onclick="app.toggleCampClient('${c.id}')"` : 'disabled style="opacity:.45"'}>
              <span class="camp-check ${on ? 'on' : ''}">${on ? check : ''}</span>
              <span class="v-row-main">
                <strong>${this.esc(c.name)}</strong>
                <small>${ok ? this.esc(wa ? c.phone : c.email) : `Sem ${wa ? 'WhatsApp' : 'e-mail'} cadastrado`}</small>
              </span>
            </button>`;
          }).join('')}
        </div>
      </div>
      <div class="camp-nav">
        <button class="btn-outline" onclick="app.setCampStep(2)">Voltar</button>
        <button class="btn-gold" ${rec.length ? '' : 'disabled style="opacity:.4"'} onclick="app.openCampQueue()">Enviar para ${rec.length}</button>
      </div>
      <p class="pr-hint" style="text-align:center">Cada envio abre ${wa ? 'o WhatsApp' : 'seu e-mail'} com a mensagem pronta; é só tocar em enviar.</p>
    `;
  },

  openUrl(url, blank) {
    const a = document.createElement('a');
    a.href = url;
    if (blank) { a.target = '_blank'; a.rel = 'noopener'; }
    document.body.appendChild(a);
    a.click();
    a.remove();
  },

  openCampQueue() {
    const st = this._camp;
    const rec = this.campRecipients();
    const done = rec.filter(c => st.sent[c.id]).length;
    const next = rec.find(c => !st.sent[c.id]);
    const wa = st.channel === 'whatsapp';

    document.getElementById('genericModalTitle').textContent = `Disparo • ${done}/${rec.length}`;
    document.getElementById('genericModalBody').innerHTML = `
      <button class="btn-gold" ${next ? '' : 'disabled style="opacity:.5"'} onclick="app.sendCamp('${next ? next.id : ''}')">
        ${next ? `Enviar para ${this.esc(next.name.split(' ')[0])}` : 'Disparo concluído'}
      </button>
      ${!wa && rec.length > 1 ? `<button class="btn-outline" onclick="app.sendEmailBulk()">Abrir e-mail com todos em cópia oculta</button>` : ''}
      <div class="pr-group">
        ${rec.map(c => `
          <div class="v-row" style="cursor:default">
            <span class="v-avatar sm">${this.initials(c.name)}</span>
            <span class="v-row-main">
              <strong>${this.esc(c.name)}</strong>
              <small>${this.esc(wa ? c.phone : c.email)}</small>
            </span>
            ${st.sent[c.id]
              ? `<span style="color:var(--success);font-size:14px;font-weight:600">Enviado</span>`
              : `<button class="btn-outline" onclick="app.sendCamp('${c.id}')">Enviar</button>`}
          </div>`).join('')}
      </div>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  sendCamp(id) {
    if (!id) return;
    const st = this._camp;
    const c = this.getClient360().find(x => x.id === id);
    if (!c) return;
    const msg = this.fillTemplate(st.body, c);
    if (st.channel === 'whatsapp') {
      let num = String(c.phone).replace(/\D/g, '');
      if (num.length <= 11) num = `55${num}`;
      this.openUrl(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, true);
    } else {
      this.openUrl(`mailto:${c.email}?subject=${encodeURIComponent(this.fillTemplate(st.subject, c))}&body=${encodeURIComponent(msg)}`, false);
    }
    this.logCamp(c);
    st.sent[id] = true;
    this.openCampQueue();
  },

  sendEmailBulk() {
    const st = this._camp;
    const rec = this.campRecipients();
    const bcc = rec.map(c => c.email).join(',');
    this.openUrl(`mailto:?bcc=${encodeURIComponent(bcc)}&subject=${encodeURIComponent(this.fillTemplate(st.subject, null))}&body=${encodeURIComponent(this.fillTemplate(st.body, null))}`, false);
    rec.forEach(c => { this.logCamp(c); st.sent[c.id] = true; });
    this.openCampQueue();
  },

  logCamp(c) {
    const st = this._camp;
    const tpl = this.getTemplates().find(t => t.id === st.templateId);
    const log = this.getCampLog();
    log.unshift({ ts: Date.now(), channel: st.channel, template: tpl ? tpl.name : 'Mensagem avulsa', clientId: c.id, name: c.name });
    if (log.length > 200) log.length = 200;
    this.saveState();
  },

  renderCampHistory() {
    const log = this.getCampLog();
    if (!log.length) {
      return `<div class="reels-empty" style="height:auto;padding:40px 20px"><strong>Nenhum disparo ainda</strong><span>Os envios que você fizer aparecem aqui.</span></div>`;
    }
    const fmt = ts => new Date(ts).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    return `
      <div class="pr-group">
        ${log.slice(0, 60).map(l => `
          <div class="v-row" style="cursor:default">
            <span class="v-avatar sm">${this.initials(l.name)}</span>
            <span class="v-row-main">
              <strong>${this.esc(l.name)}</strong>
              <small>${this.esc(l.template)} • ${l.channel === 'whatsapp' ? 'WhatsApp' : 'E-mail'}</small>
            </span>
            <small style="color:var(--text-muted);font-size:12.5px;white-space:nowrap">${fmt(l.ts)}</small>
          </div>`).join('')}
      </div>
      <button class="v-link" onclick="app.clearCampLog()">Limpar histórico</button>
    `;
  },

  clearCampLog() {
    this.state.campaignLog = [];
    this.saveState();
    this.navigate('campanhas');
  },

  renderCampTemplates() {
    const list = this.getTemplates();
    const group = (ch, label) => {
      const items = list.filter(t => t.channel === ch);
      return `
        <div class="pr-section">
          <h4 class="pr-title">${label}</h4>
          <div class="pr-group">
            ${items.map(t => `
              <button class="v-row" onclick="app.openTemplateEditor('${t.id}')">
                <span class="v-row-main">
                  <strong>${this.esc(t.name)}</strong>
                  <small>${this.esc(t.body.replace(/\s+/g, ' '))}</small>
                </span>
                <span class="v-row-side"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l6 6-6 6"/></svg></span>
              </button>`).join('') || '<div class="v-empty">Nenhum template.</div>'}
          </div>
        </div>`;
    };
    return `
      ${group('whatsapp', 'WhatsApp')}
      ${group('email', 'E-mail')}
      <button class="btn-gold" onclick="app.openTemplateEditor(null)">+ Novo template</button>
    `;
  },

  openTemplateEditor(id, fromComposer = false) {
    const existing = id ? this.getTemplates().find(t => t.id === id) : null;
    const st = this._camp;
    const t = existing || (fromComposer
      ? { name: '', channel: st.channel, subject: st.subject, body: st.body }
      : { name: '', channel: this._camp.channel, subject: '', body: '' });
    this._tplChannel = t.channel;
    this._editingTpl = existing ? existing.id : null;

    document.getElementById('genericModalTitle').textContent = existing ? 'Editar template' : 'Novo template';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="field-group">
        <label>Nome</label>
        <input id="tplName" class="input-box" placeholder="Ex: Black Friday" value="${this.esc(t.name)}" />
      </div>
      <div class="segmented-control" style="width:100%">
        <button class="seg-btn ${t.channel === 'whatsapp' ? 'active' : ''}" style="flex:1" onclick="app.setTplChannel(this, 'whatsapp')">WhatsApp</button>
        <button class="seg-btn ${t.channel === 'email' ? 'active' : ''}" style="flex:1" onclick="app.setTplChannel(this, 'email')">E-mail</button>
      </div>
      <div class="field-group" id="tplSubjectWrap" style="${t.channel === 'email' ? '' : 'display:none'}">
        <label>Assunto</label>
        <input id="tplSubject" class="input-box" value="${this.esc(t.subject || '')}" />
      </div>
      <div class="field-group">
        <label>Mensagem</label>
        <textarea id="tplBody" class="input-box" rows="6">${this.esc(t.body)}</textarea>
        ${this.varChips('tplBody')}
      </div>
      <button class="btn-gold" onclick="app.saveTemplate()">Salvar template</button>
      ${existing ? `<button class="btn-outline" style="color:var(--danger)" onclick="app.deleteTemplate('${existing.id}')">Excluir template</button>` : ''}
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  setTplChannel(btn, ch) {
    this._tplChannel = ch;
    btn.parentElement.querySelectorAll('.seg-btn').forEach(b => b.classList.toggle('active', b === btn));
    document.getElementById('tplSubjectWrap').style.display = ch === 'email' ? '' : 'none';
  },

  saveTemplate() {
    const name = document.getElementById('tplName').value.trim();
    const body = document.getElementById('tplBody').value.trim();
    if (!name) return this.showToast('Dê um nome ao template');
    if (!body) return this.showToast('Escreva a mensagem');
    const data = { name, channel: this._tplChannel, subject: document.getElementById('tplSubject').value.trim(), body };
    const list = this.getTemplates();
    let id = this._editingTpl;
    if (id) {
      Object.assign(list.find(t => t.id === id), data);
    } else {
      id = `t-${Date.now()}`;
      list.push({ id, ...data });
    }
    this.saveState();
    this.closeGenericModal();
    this.showToast('Template salvo');
    Object.assign(this._camp, { channel: data.channel, templateId: id, subject: data.subject, body: data.body, sent: {} });
    this.navigate('campanhas');
  },

  deleteTemplate(id) {
    this.state.templates = this.getTemplates().filter(t => t.id !== id);
    if (this._camp.templateId === id) Object.assign(this._camp, { templateId: null, subject: '', body: '' });
    this.saveState();
    this.closeGenericModal();
    this.navigate('campanhas');
  },

  /* ==================== 5. + PRODUTOS ==================== */
  renderProdutos() {
    const totalUnits = this.state.products.reduce((a, b) => a + b.stock, 0);
    const totalVal = this.state.products.reduce((a, b) => a + (b.stock * b.price), 0);

    return `
      <div class="grid-2">
        <div class="analytics-kpi-box">
          <span class="kpi-label">Peças em Estoque</span>
          <div class="kpi-box-val">${totalUnits} un.</div>
          <span class="kpi-box-sub">${this.state.products.length} modelos ativos</span>
        </div>
        <div class="analytics-kpi-box gold-highlight">
          <span class="kpi-label">Valor em Grade</span>
          <div class="kpi-box-val" style="color:var(--gold)">${this.formatBRL(totalVal)}</div>
          <span class="kpi-box-sub">Preço de venda</span>
        </div>
      </div>

      <div class="section-bar">
        <span class="section-heading">Catálogo &amp; Estoque</span>
        <button class="btn-outline" onclick="app.openNewProductModal()">+ Nova Peça</button>
      </div>

      <div class="list-stack">
        ${this.state.products.map(p => {
          const low = p.stock <= p.minStock;
          const grossMargin = Math.round(((p.price - p.cost) / p.price) * 100);
          return `
            <div class="row-card">
              <div class="row-main">
                <strong>${p.name}</strong>
                <span>Venda: ${this.formatBRL(p.price)} • Margem ${grossMargin}%</span>
                <span style="color:${low ? 'var(--danger)' : 'var(--gold)'};font-weight:600">
                  ${low ? `Estoque baixo: ${p.stock} un.` : `Grade (${p.size}): ${p.stock} un.`}
                </span>
              </div>
              <div class="stepper">
                <button class="step-btn" onclick="app.adjustStock('${p.id}', -1)">-</button>
                <strong style="min-width:20px;text-align:center;font-size:13px">${p.stock}</strong>
                <button class="step-btn" onclick="app.adjustStock('${p.id}', 1)">+</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  adjustStock(productId, delta) {
    const p = this.state.products.find(x => x.id === productId);
    if (!p) return;
    p.stock = Math.max(0, p.stock + delta);
    this.saveState();
    this.navigate('produtos');
  },

  openNewProductModal() {
    document.getElementById('genericModalTitle').textContent = 'Cadastrar Nova Peça';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="field-group">
        <label>Nome da Peça</label>
        <input id="npName" class="input-box" placeholder="Ex: Camisa Linho Ghost" />
      </div>
      <div class="grid-2">
        <div class="field-group">
          <label>Custo (R$)</label>
          <input id="npCost" type="number" step="0.01" class="input-box" placeholder="85.00" />
        </div>
        <div class="field-group">
          <label>Preço de Venda (R$)</label>
          <input id="npPrice" type="number" step="0.01" class="input-box" placeholder="239.90" />
        </div>
      </div>
      <div class="grid-2">
        <div class="field-group">
          <label>Quantidade Inicial</label>
          <input id="npStock" type="number" class="input-box" value="12" />
        </div>
        <div class="field-group">
          <label>Grade / Tamanhos</label>
          <input id="npSize" class="input-box" value="P / M / G" />
        </div>
      </div>
      <button class="btn-gold" onclick="app.saveNewProduct()">Adicionar ao Estoque</button>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  saveNewProduct() {
    const name = document.getElementById('npName').value.trim();
    if (!name) return this.showToast('Informe o nome da peça');
    const cost = parseFloat(document.getElementById('npCost').value) || 70;
    const price = parseFloat(document.getElementById('npPrice').value) || 199.90;
    const stock = parseInt(document.getElementById('npStock').value, 10) || 10;
    const size = document.getElementById('npSize').value.trim() || 'M / G';

    this.state.products.unshift({
      id: `p-${Date.now()}`,
      name,
      sku: `NGD-${Math.floor(600 + Math.random() * 300)}`,
      price,
      cost,
      stock,
      minStock: 5,
      size
    });
    this.saveState();
    this.closeGenericModal();
    this.showToast('Peça cadastrada no estoque');
    this.navigate('produtos');
  },

  /* ==================== 6. FLUXO DE CAIXA ==================== */
  renderFluxo() {
    const totalIn = this.state.cashflow.filter(c => c.type === 'in').reduce((a, b) => a + b.amount, 0);
    const totalOut = this.state.cashflow.filter(c => c.type === 'out').reduce((a, b) => a + b.amount, 0);
    const balance = totalIn - totalOut;

    return `
      <div class="summary-panel">
        <div class="summary-top">
          <span class="summary-label">Saldo Disponível em Caixa</span>
          <span class="tag tag-gold">Consolidado</span>
        </div>
        <div class="summary-value">${this.formatBRL(balance)}</div>
        <div class="grid-2" style="padding-top:10px;border-top:1px solid var(--border-line)">
          <div>
            <span style="font-size:11px;color:var(--text-muted)">Entradas</span>
            <strong style="display:block;font-size:14px;color:var(--gold)">+ ${this.formatBRL(totalIn)}</strong>
          </div>
          <div>
            <span style="font-size:11px;color:var(--text-muted)">Saídas</span>
            <strong style="display:block;font-size:14px;color:var(--danger)">- ${this.formatBRL(totalOut)}</strong>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <button class="btn-outline" onclick="app.openCashModal('in')">+ Registrar Entrada</button>
        <button class="btn-outline" onclick="app.openCashModal('out')">- Registrar Saída</button>
      </div>

      <span class="section-heading">Extrato de Movimentações</span>
      <div class="list-stack">
        ${this.state.cashflow.map(cf => `
          <div class="row-card">
            <div class="row-main">
              <strong>${cf.title}</strong>
              <span>${cf.category} • ${cf.date}</span>
            </div>
            <div class="row-side">
              <strong style="color:${cf.type === 'in' ? 'var(--gold)' : 'var(--danger)'}">
                ${cf.type === 'in' ? '+' : '-'} ${this.formatBRL(cf.amount)}
              </strong>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  openCashModal(type) {
    document.getElementById('genericModalTitle').textContent = type === 'in' ? 'Registrar Entrada' : 'Registrar Saída';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="field-group">
        <label>Descrição</label>
        <input id="cfTitle" class="input-box" placeholder="Descrição do lançamento" />
      </div>
      <div class="field-group">
        <label>Valor (R$)</label>
        <input id="cfAmount" type="number" step="0.01" class="input-box" placeholder="0,00" />
      </div>
      <div class="field-group">
        <label>Categoria</label>
        <input id="cfCategory" class="input-box" value="${type === 'in' ? 'Receita Operacional' : 'Fornecedor / Logística'}" />
      </div>
      <button class="btn-gold" onclick="app.saveCashEntry('${type}')">Salvar Lançamento</button>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  saveCashEntry(type) {
    const title = document.getElementById('cfTitle').value.trim();
    const amount = parseFloat(document.getElementById('cfAmount').value);
    const category = document.getElementById('cfCategory').value.trim();
    if (!title || !amount) return this.showToast('Preencha descrição e valor');

    this.state.cashflow.unshift({
      id: `cf-${Date.now()}`,
      type,
      title,
      category,
      amount,
      date: 'Agora'
    });
    this.saveState();
    this.closeGenericModal();
    this.navigate('fluxo');
  },

  /* ==================== 7. CRM ==================== */
  renderCRM() {
    return `
      <div class="section-bar">
        <span class="section-heading">Atendimentos &amp; Plano VIP</span>
      </div>
      <div class="list-stack">
        ${this.state.crmLeads.map(l => `
          <div class="card">
            <div class="section-bar" style="margin-bottom:6px">
              <span class="tag tag-gold">${l.tag} • ${l.status}</span>
              <strong style="color:var(--gold);font-size:13.5px">${this.formatBRL(l.value)}</strong>
            </div>
            <strong style="font-size:14px;display:block">${l.name}</strong>
            <span style="font-size:12px;color:var(--text-muted);display:block;margin:2px 0 8px">${l.phone}</span>
            <p style="font-size:12px;color:var(--text-muted);padding:8px 10px;background:var(--bg-card-subtle);border-radius:7px;margin-bottom:10px">
              ${l.action}
            </p>
            <div class="grid-2">
              <button class="btn-outline" onclick="app.showToast('Mensagem enviada para ${l.name}')">Contatar</button>
              <button class="btn-gold" style="padding:8px" onclick="app.openNewSaleModal()">Gerar Pedido</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  /* ==================== 8. METAS ==================== */
  renderMetas() {
    const current = this.getTotalRevenue() + 34200;
    const goal = this.state.monthlyGoal;
    const pct = Math.min(100, Math.round((current / goal) * 100));
    const diff = Math.max(0, goal - current);

    return `
      <div class="summary-panel">
        <div class="summary-top">
          <span class="summary-label">Meta Mensal • Outubro</span>
          <span class="tag tag-gold">${pct}% atingida</span>
        </div>
        <div class="summary-value">${this.formatBRL(current)}</div>
        <div class="bar-progress">
          <div class="bar-progress-fill" style="width:${pct}%"></div>
        </div>
        <span style="font-size:12px;color:var(--text-muted)">
          Alvo: ${this.formatBRL(goal)} • Falta: ${this.formatBRL(diff)}
        </span>
      </div>

      <div class="card">
        <div class="field-group">
          <label>Definir Meta Mensal (R$)</label>
          <input id="goalInput" type="number" step="1000" class="input-box" value="${goal}" />
        </div>
        <button class="btn-gold" onclick="app.updateGoal()">Salvar Meta</button>
      </div>
    `;
  },

  updateGoal() {
    const val = parseFloat(document.getElementById('goalInput').value);
    if (val > 0) {
      this.state.monthlyGoal = val;
      this.saveState();
      this.showToast('Meta atualizada');
      this.navigate('metas');
    }
  },

  /* ==================== 9. PRECIFICAÇÃO ==================== */
  defaultPricing() {
    return {
      products: [
        { name: 'Camisa da Lacoste', value: 24 },
        { name: 'Bermuda', value: 50 },
        { name: 'Moletom', value: 65 },
        { name: 'Conjunto', value: 110 }
      ],
      ficha: [
        { name: 'Embalagem', value: 0 },
        { name: 'Frete na compra', value: 0 }
      ],
      fixed: ['Água', 'Luz', 'Internet', 'Aluguel', 'Funcionários', 'MEI'].map(name => ({ name, value: 0 })),
      revenue: 2295,
      card: 0,
      tax: 0,
      profit: 25,
      invest: 10
    };
  },

  getPricing() {
    if (!this.state.pricing) this.state.pricing = this.defaultPricing();
    return this.state.pricing;
  },

  pricingRows(list, unit) {
    return this.getPricing()[list].map((row, i) => `
      <div class="pr-line">
        <button class="pr-minus" title="Remover" onclick="app.removePricingRow('${list}', ${i})">&minus;</button>
        <input class="pr-name" value="${this.esc(row.name)}" placeholder="Nome"
          oninput="app.setPricingRow('${list}', ${i}, 'name', this.value)" />
        <span class="pr-unit">${unit}</span>
        <input class="pr-val" type="number" inputmode="decimal" step="0.01" min="0" value="${row.value}"
          oninput="app.setPricingRow('${list}', ${i}, 'value', this.value)" />
      </div>`).join('');
  },

  pricingPct(field, label) {
    return `
      <div class="pr-line">
        <span class="pr-label">${label}</span>
        <input class="pr-val" type="number" inputmode="decimal" step="0.1" min="0" value="${this.getPricing()[field]}"
          oninput="app.setPricingNum('${field}', this.value)" />
        <span class="pr-unit">%</span>
      </div>`;
  },

  pricingSection(title, hint, body) {
    return `
      <div class="pr-section">
        <h4 class="pr-title">${title}</h4>
        ${hint ? `<p class="pr-hint">${hint}</p>` : ''}
        <div class="pr-group">${body}</div>
      </div>`;
  },

  renderPrecificacao() {
    const pr = this.getPricing();
    return `
      <div id="pricingHero" class="pr-hero"></div>

      <div class="pr-section">
        <h4 class="pr-title">Preços ideais</h4>
        <div id="pricingList" class="pr-prices"></div>
      </div>

      ${this.pricingSection('Lista de produtos', 'Nome e custo de compra de cada produto.', `
        ${this.pricingRows('products', 'R$')}
        <button class="pr-add" onclick="app.addPricingRow('products')">+ Adicionar produto</button>`)}

      ${this.pricingSection('Ficha técnica', 'Custos extras somados a cada produto, como embalagem e frete.', `
        ${this.pricingRows('ficha', 'R$')}
        <button class="pr-add" onclick="app.addPricingRow('ficha')">+ Adicionar custo</button>
        <div class="pr-line pr-sum"><span class="pr-label">Total</span><strong id="pricingFichaTotal"></strong></div>`)}

      ${this.pricingSection('CV sem CMV', 'Percentuais que entram no cálculo do markup.', `
        ${this.pricingPct('card', 'Taxa de cartão')}
        ${this.pricingPct('tax', 'Impostos')}
        <div class="pr-line">
          <span class="pr-label">Despesas fixas <small>calculada</small></span>
          <strong id="pricingFixedPct"></strong>
        </div>
        ${this.pricingPct('profit', 'Lucro')}
        ${this.pricingPct('invest', 'Investimento')}
        <div class="pr-line pr-sum"><span class="pr-label">Soma</span><strong id="pricingPctTotal"></strong></div>`)}

      ${this.pricingSection('Sua receita aproximada', 'Usada para transformar as despesas fixas em percentual.', `
        <div class="pr-line">
          <span class="pr-label">Receita mensal</span>
          <span class="pr-unit">R$</span>
          <input class="pr-val" type="number" inputmode="decimal" step="0.01" min="0" value="${pr.revenue}"
            oninput="app.setPricingNum('revenue', this.value)" />
        </div>`)}

      ${this.pricingSection('Suas despesas fixas', '', `
        ${this.pricingRows('fixed', 'R$')}
        <button class="pr-add" onclick="app.addPricingRow('fixed')">+ Adicionar despesa</button>
        <div class="pr-line pr-sum"><span class="pr-label">Total</span><strong id="pricingFixedTotal"></strong></div>`)}
    `;
  },

  setPricingRow(list, i, field, val) {
    const row = this.getPricing()[list][i];
    row[field] = field === 'value' ? (parseFloat(val) || 0) : val;
    this.saveState();
    this.recalcPricing();
  },

  setPricingNum(field, val) {
    this.getPricing()[field] = parseFloat(val) || 0;
    this.saveState();
    this.recalcPricing();
  },

  addPricingRow(list) {
    this.getPricing()[list].push({ name: '', value: 0 });
    this.saveState();
    this.navigate('precificacao');
  },

  removePricingRow(list, i) {
    this.getPricing()[list].splice(i, 1);
    this.saveState();
    this.navigate('precificacao');
  },

  recalcPricing() {
    const hero = document.getElementById('pricingHero');
    if (!hero) return;
    const pr = this.getPricing();
    const sum = list => list.reduce((t, r) => t + (parseFloat(r.value) || 0), 0);

    const fichaTotal = sum(pr.ficha);
    const fixedTotal = sum(pr.fixed);
    const fixedPct = pr.revenue > 0 ? (fixedTotal / pr.revenue) * 100 : 0;
    const totalPct = pr.card + pr.tax + fixedPct + pr.profit + pr.invest;
    const pct = n => `${n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%`;

    document.getElementById('pricingFichaTotal').textContent = this.formatBRL(fichaTotal);
    document.getElementById('pricingFixedTotal').textContent = this.formatBRL(fixedTotal);
    document.getElementById('pricingFixedPct').textContent = pct(fixedPct);
    document.getElementById('pricingPctTotal').textContent = pct(totalPct);

    const list = document.getElementById('pricingList');
    if (totalPct >= 100) {
      hero.classList.add('pr-hero-error');
      hero.innerHTML = `
        <span class="pr-hero-label">Seu markup</span>
        <div class="pr-hero-value">—</div>
        <span class="pr-hero-note">A soma dos percentuais (${pct(totalPct)}) precisa ficar abaixo de 100%.</span>`;
      list.innerHTML = '';
      return;
    }

    const markup = 1 / (1 - totalPct / 100);
    hero.classList.remove('pr-hero-error');
    hero.innerHTML = `
      <span class="pr-hero-label">Seu markup</span>
      <div class="pr-hero-value">${markup.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}<small>x</small></div>
      <div class="pr-chips">
        <div><span>Percentuais</span><strong>${pct(totalPct)}</strong></div>
        <div><span>Ficha técnica</span><strong>${this.formatBRL(fichaTotal)}</strong></div>
        <div><span>Desp. fixas</span><strong>${pct(fixedPct)}</strong></div>
      </div>`;

    list.innerHTML = pr.products.map(r => {
      const cost = parseFloat(r.value) || 0;
      const base = cost + fichaTotal;
      return `
        <div class="pr-price">
          <div class="pr-price-main">
            <strong>${this.esc(r.name || '—')}</strong>
            <span>Custo ${this.formatBRL(cost)} + ficha ${this.formatBRL(fichaTotal)}</span>
          </div>
          <div class="pr-price-val">
            <span>Preço ideal</span>
            <strong>${this.formatBRL(base * markup)}</strong>
          </div>
        </div>`;
    }).join('') || '<span class="pr-hint">Adicione produtos para calcular.</span>';
  },

  /* ==================== 10. ACADEMY ==================== */
  esc(v) {
    return String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },

  getReels() {
    if (!Array.isArray(this.state.reels)) {
      this.state.reels = JSON.parse(JSON.stringify(initialData.reels));
    }
    return this.state.reels;
  },

  /* Vídeos enviados do aparelho ficam no IndexedDB (localStorage não comporta arquivos grandes) */
  _blobUrls: {},

  reelDb() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('ngd_reels', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('videos');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async reelFileOp(mode, id, blob) {
    const db = await this.reelDb();
    return new Promise((resolve, reject) => {
      const store = db.transaction('videos', mode === 'get' ? 'readonly' : 'readwrite').objectStore('videos');
      const req = mode === 'put' ? store.put(blob, id) : mode === 'delete' ? store.delete(id) : store.get(id);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async loadReelFiles() {
    try {
      for (const r of this.getReels()) {
        if (r.fileId && !this._blobUrls[r.fileId]) {
          const blob = await this.reelFileOp('get', r.fileId);
          if (blob) this._blobUrls[r.fileId] = URL.createObjectURL(blob);
        }
      }
      if (this.currentScreen === 'academy') this.navigate('academy');
    } catch (e) { /* IndexedDB indisponível: vídeos por arquivo não serão carregados */ }
  },

  reelSrc(r) {
    return r.fileId ? (this._blobUrls[r.fileId] || '') : (r.src || '');
  },

  youtubeId(url) {
    const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/);
    return m ? m[1] : null;
  },

  renderAcademy() {
    const reels = this.getReels();
    setTimeout(() => this.initReels(), 0);

    if (!reels.length) {
      return `
        <div class="reels-empty">
          <strong>Nenhum vídeo publicado</strong>
          <span>Publique vídeos do seu curso para os vendedores assistirem e aderirem.</span>
          <button class="btn-gold" style="width:auto" onclick="app.openReelsManager()">+ Publicar vídeo</button>
        </div>`;
    }

    return `
      <div class="reels-feed" id="reelsFeed">
        <button class="reels-add" onclick="app.openReelsManager()">+ Vídeo</button>
        ${reels.map((r, i) => this.renderReel(r, i)).join('')}
      </div>
    `;
  },

  renderReel(r, i) {
    const srcUrl = this.reelSrc(r);
    const yt = r.fileId ? null : (srcUrl ? this.youtubeId(srcUrl) : null);
    let media;
    if (yt) {
      media = `<iframe class="reel-media" data-src="https://www.youtube.com/embed/${yt}?autoplay=1&mute=1&controls=0&loop=1&playlist=${yt}&playsinline=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    } else if (srcUrl) {
      media = `<video class="reel-media" src="${this.esc(srcUrl)}" playsinline muted preload="metadata"
        onclick="app.toggleReelPlay(this)" ontimeupdate="app.reelProgress(this)" onended="app.reelEnded(this)"></video>`;
    } else {
      const hues = [210, 265, 330, 150, 30];
      media = `<div class="reel-media reel-poster" style="--h:${hues[i % hues.length]}">
        <span>Vídeo de exemplo<br><small>Toque em "+ Vídeo" para publicar o seu</small></span></div>`;
    }

    return `
      <section class="reel" data-index="${i}">
        ${media}
        <div class="reel-shade"></div>
        <div class="reel-progress"><i></i></div>

        ${srcUrl && !yt ? `
        <div class="reel-rail">
          <button class="reel-round" onclick="app.toggleReelMute(this)" title="Som">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line class="mute-x" x1="23" y1="9" x2="17" y2="15"/><line class="mute-x" x1="17" y1="9" x2="23" y2="15"/></svg>
          </button>
        </div>` : ''}

        <div class="reel-info">
          <span class="tag">${this.esc(r.area || 'Curso')}</span>
          <strong>${this.esc(r.title)}</strong>
          <p>${this.esc(r.caption || '')}</p>
          <button class="reel-cta" onclick="app.openReelCta(${i})">
            ${this.esc(r.ctaLabel || 'Quero aderir ao curso')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div class="reel-end">
          <strong>Quer dominar esse assunto?</strong>
          <span>Continue na plataforma e faça a adesão ao curso.</span>
          <button class="reel-cta" onclick="app.openReelCta(${i})">${this.esc(r.ctaLabel || 'Quero aderir ao curso')}</button>
          <button class="reel-replay" onclick="app.replayReel(this)">Assistir novamente</button>
        </div>
      </section>
    `;
  },

  initReels() {
    const feed = document.getElementById('reelsFeed');
    if (this._reelObs) this._reelObs.disconnect();
    if (!feed) return;

    this._reelObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const reel = e.target;
        const v = reel.querySelector('video');
        const f = reel.querySelector('iframe');
        if (e.isIntersecting && e.intersectionRatio >= 0.6) {
          reel.classList.remove('ended');
          if (v) {
            v.muted = this._reelMuted !== false;
            v.play().catch(() => {});
          }
          if (f && !f.getAttribute('src')) f.setAttribute('src', f.dataset.src);
        } else {
          if (v) v.pause();
          if (f) f.removeAttribute('src');
        }
      });
    }, { root: feed, threshold: [0, 0.6] });

    feed.querySelectorAll('.reel').forEach(r => this._reelObs.observe(r));
  },

  toggleReelPlay(v) {
    if (v.paused) v.play().catch(() => {}); else v.pause();
  },

  toggleReelMute(btn) {
    this._reelMuted = this._reelMuted === false;
    document.querySelectorAll('.reel video').forEach(v => { v.muted = this._reelMuted; });
    document.querySelectorAll('.reel-round').forEach(b => b.classList.toggle('sound-on', this._reelMuted === false));
  },

  reelProgress(v) {
    const bar = v.parentElement.querySelector('.reel-progress i');
    if (bar && v.duration) bar.style.width = `${(v.currentTime / v.duration) * 100}%`;
  },

  reelEnded(v) {
    v.parentElement.classList.add('ended');
  },

  replayReel(btn) {
    const reel = btn.closest('.reel');
    reel.classList.remove('ended');
    const v = reel.querySelector('video');
    if (v) { v.currentTime = 0; v.play().catch(() => {}); }
  },

  openReelCta(i) {
    const r = this.getReels()[i];
    if (!r) return;
    if (!/^https?:\/\//i.test(r.ctaUrl || '')) {
      return this.showToast('Este vídeo ainda não tem link de adesão');
    }
    r.ctaClicks = (r.ctaClicks || 0) + 1;
    this.saveState();
    window.open(r.ctaUrl, '_blank', 'noopener');
  },

  openReelsManager() {
    const reels = this.getReels();
    const lastUrl = reels.map(r => r.ctaUrl).filter(Boolean).pop() || '';
    document.getElementById('genericModalTitle').textContent = 'Vídeos do Academy';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="field-group">
        <label>Título</label>
        <input id="rvTitle" class="input-box" placeholder="Ex: Como fechar venda no Direct" />
      </div>
      <div class="field-group">
        <label>Enviar vídeo do aparelho</label>
        <input id="rvFile" type="file" accept="video/*" class="input-box" />
      </div>
      <div class="field-group">
        <label>ou colar o link do vídeo (.mp4 ou YouTube)</label>
        <input id="rvSrc" class="input-box" placeholder="https://..." />
      </div>
      <div class="field-group">
        <label>Legenda</label>
        <input id="rvCaption" class="input-box" placeholder="Resumo curto do vídeo" />
      </div>
      <div class="grid-2">
        <div class="field-group">
          <label>Categoria</label>
          <input id="rvArea" class="input-box" value="Vendas" />
        </div>
        <div class="field-group">
          <label>Texto do botão</label>
          <input id="rvLabel" class="input-box" value="Quero aderir ao curso" />
        </div>
      </div>
      <div class="field-group">
        <label>Link da plataforma de adesão</label>
        <input id="rvCta" class="input-box" value="${this.esc(lastUrl)}" placeholder="https://sua-plataforma.com/curso" />
      </div>
      <button class="btn-gold" onclick="app.saveReel()">Publicar vídeo</button>

      ${reels.length ? `<span class="pres-section-title" style="margin-top:6px">Publicados</span>` : ''}
      ${reels.map((r, i) => `
        <div class="row-card">
          <div class="row-main">
            <strong>${this.esc(r.title)}</strong>
            <span>${this.esc(r.area || '')} • ${r.ctaClicks || 0} cliques na adesão</span>
          </div>
          <button class="btn-outline" style="color:var(--danger)" onclick="app.removeReel(${i})">Remover</button>
        </div>`).join('')}
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  async saveReel() {
    const val = id => document.getElementById(id).value.trim();
    const title = val('rvTitle');
    const src = val('rvSrc');
    const ctaUrl = val('rvCta');
    if (!title) return this.showToast('Informe o título do vídeo');
    if (src && !/^https?:\/\//i.test(src)) return this.showToast('O link do vídeo deve começar com http(s)://');
    if (ctaUrl && !/^https?:\/\//i.test(ctaUrl)) return this.showToast('O link de adesão deve começar com http(s)://');

    const file = document.getElementById('rvFile').files[0];
    const id = `r-${Date.now()}`;
    let fileId = '';
    if (file) {
      try {
        await this.reelFileOp('put', id, file);
        this._blobUrls[id] = URL.createObjectURL(file);
        fileId = id;
      } catch (e) {
        return this.showToast('Não foi possível salvar o arquivo neste navegador');
      }
    }

    this.getReels().unshift({
      id,
      title,
      caption: val('rvCaption'),
      area: val('rvArea') || 'Curso',
      src: fileId ? '' : src,
      fileId,
      ctaUrl,
      ctaLabel: val('rvLabel') || 'Quero aderir ao curso',
      ctaClicks: 0
    });
    this.saveState();
    this.closeGenericModal();
    this.showToast('Vídeo publicado no Academy');
    this.navigate('academy');
  },

  removeReel(i) {
    const [gone] = this.getReels().splice(i, 1);
    if (gone && gone.fileId) {
      this.reelFileOp('delete', gone.fileId).catch(() => {});
      URL.revokeObjectURL(this._blobUrls[gone.fileId]);
      delete this._blobUrls[gone.fileId];
    }
    this.saveState();
    this.openReelsManager();
    this.navigate('academy');
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  /* ==================== 11. NEWS ==================== */
  renderNews() {
    return `
      <div class="list-stack">
        ${this.state.news.map(n => `
          <div class="card">
            <div class="section-bar" style="margin-bottom:6px">
              <span class="tag tag-gold">${n.category}</span>
              <span style="font-size:11px;color:var(--text-muted)">${n.date}</span>
            </div>
            <strong style="font-size:14px;display:block;margin-bottom:6px">${n.title}</strong>
            <p style="font-size:12.5px;color:var(--text-muted);line-height:1.5">${n.text}</p>
          </div>
        `).join('')}
      </div>
    `;
  },

  /* ==================== 12. AJUDA & AJUSTE ==================== */
  renderAjuda() {
    return `
      <div class="card">
        <strong style="font-size:14px;display:block;margin-bottom:6px">Suporte Operacional Ghost</strong>
        <p style="font-size:12.5px;color:var(--text-muted);margin-bottom:12px">
          Canal direto para suporte de vendas, envios e operação de loja.
        </p>
        <button class="btn-gold" onclick="app.showToast('Atendimento iniciado')">Abrir Chamado</button>
      </div>
    `;
  },

  renderAjuste() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    return `
      <div class="card">
        <span class="section-heading" style="display:block;margin-bottom:10px">Tema do Aplicativo</span>
        <div class="grid-2">
          <button class="pay-tile ${currentTheme === 'black-gold' ? 'selected' : ''}" onclick="app.setTheme('black-gold');app.navigate('ajuste')">
            Preto &amp; Dourado
          </button>
          <button class="pay-tile ${currentTheme === 'white-gold' ? 'selected' : ''}" onclick="app.setTheme('white-gold');app.navigate('ajuste')">
            Branco &amp; Dourado
          </button>
        </div>
      </div>

      <div class="card">
        <div class="field-group">
          <label>Identificação da Loja</label>
          <input class="input-box" value="${this.state.storeName}" onchange="app.state.storeName=this.value;app.saveState()" />
        </div>
        <div class="field-group" style="margin-bottom:0">
          <label>Instagram</label>
          <input class="input-box" value="${this.state.instagram}" readonly />
        </div>
      </div>

      <button class="btn-outline" style="width:100%" onclick="app.resetData()">Restaurar Base Padrão</button>
    `;
  },

  closeGenericModal() {
    document.getElementById('genericModalOverlay').classList.remove('open');
  }
};

window.addEventListener('DOMContentLoaded', () => app.init());
